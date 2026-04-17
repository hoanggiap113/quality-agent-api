import { ObjectLiteral } from 'typeorm';
import { AbstractRepository } from './abstract-repository';
import { ConflictException, NotFoundException } from '@nestjs/common';

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export abstract class AbstractService<
  Entity extends ObjectLiteral,
  OutDto,
  CreateDto,
  UpdateDto,
> {
  constructor(protected readonly repository: AbstractRepository<Entity>) {}

  async findAll<FilterDto extends Record<string, any>>(
    filter: FilterDto,
  ): Promise<PaginationResult<OutDto>> {
    const page = Number(filter.page) || 1;
    const limit = Number(filter.limit) || 10;
    const result = await this.repository.findAll(filter, page, limit);
    return result as unknown as PaginationResult<OutDto>;
  }

  async findById(id: string): Promise<OutDto> {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Entity not found');
    return entity as unknown as OutDto;
  }

  async create(
    payload: CreateDto,
    uniqueFields: (keyof CreateDto)[] = [],
  ): Promise<OutDto> {
    for (const field of uniqueFields) {
      const existing = await this.repository.findByField(
        field as any,
        payload[field],
      );
      if (existing)
        throw new ConflictException(`${String(field)} already exists`);
    }
    const entity = await this.repository.create(payload);
    return entity as unknown as OutDto;
  }

  async update(
    id: string,
    payload: UpdateDto,
    uniqueFields: (keyof UpdateDto)[] = [],
  ): Promise<void> {
    const existing = await this.repository.findById(id);
    if (!existing) throw new NotFoundException('Entity not found');

    for (const field of uniqueFields) {
      const newValue = payload[field];
      const oldValue = (existing as any)[field];
      if (newValue && newValue !== oldValue) {
        const duplicate = await this.repository.findByField(field as any, newValue);
        if (duplicate)
          throw new ConflictException(`${String(field)} already exists`);
      }
    }
    await this.repository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.repository.findById(id);
    if (!existing) throw new NotFoundException('Entity not found');
    await this.repository.delete(id);
  }
}