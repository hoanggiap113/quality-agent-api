import { Repository, FindOptionsWhere, ObjectLiteral } from 'typeorm';
import { PaginationResult } from './abstract-service';

export abstract class AbstractRepository<Entity extends ObjectLiteral> {
    constructor(protected readonly repo: Repository<Entity>) {}

    async findAll<FilterDto extends Record<string, any>>(
        filter: FilterDto,
        page: number = 1,
        limit: number = 10,
    ): Promise<PaginationResult<Entity>> {
        const where: FindOptionsWhere<Entity> = {};

        for (const key of Object.keys(filter)) {
            if (key === 'page' || key === 'limit') continue;
            if (filter[key] !== undefined && filter[key] !== null && filter[key] !== '') {
                (where as any)[key] = filter[key];
            }
        }

        const [data, total] = await this.repo.findAndCount({
            where,
            skip: (page - 1) * limit,
            take: limit,
        });

        return { data, total, page, limit };
    }

    async findById(id: string): Promise<Entity | null> {
        return this.repo.findOne({
            where: { id } as unknown as FindOptionsWhere<Entity>,
        });
    }

    async findByField(field: keyof Entity, value: any): Promise<Entity | null> {
        return this.repo.findOne({
            where: { [field]: value } as FindOptionsWhere<Entity>,
        });
    }

    async create(payload: any): Promise<Entity> {
        const entity = this.repo.create(payload);
        return this.repo.save(entity as any);
    }

    async update(id: string, payload: any): Promise<void> {
        await this.repo.update(id, payload);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}