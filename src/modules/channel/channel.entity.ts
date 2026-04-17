import { BaseEntity } from "src/common/abstract-class";
import * as _enum from "src/common/enum";
import { CHANNEL_STATUS, ChannelType, SYNCSTATUS } from "src/common/enum";
import { Column, Entity } from "typeorm";

@Entity()
export class Channel extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    type!: ChannelType;

    @Column()
    status!: CHANNEL_STATUS;

    @Column({ nullable: true })
    sync_status?: SYNCSTATUS;

    @Column({ type: "timestamp", nullable: true })
    last_sync_at?: Date;

    @Column({ nullable: true })
    sync_interval?: _enum.SyncInterval;

    @Column({ default: false })
    save_media!: boolean;

    @Column({ default: 0 })
    total_conversations!: number;

    @Column({ nullable: true })
    app_id?: string;
}