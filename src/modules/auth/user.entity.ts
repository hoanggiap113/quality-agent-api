import { BaseEntity } from "src/common/abstract-class";
import { ROLE } from "src/common/enum";
import { Column, Entity } from "typeorm";


@Entity()
export class User extends BaseEntity{
   
    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column({ default: false })
    is_verified!: boolean
    
    @Column({ type: "enum", enum: ROLE, default: ROLE.USER })
    role!: ROLE
    
}