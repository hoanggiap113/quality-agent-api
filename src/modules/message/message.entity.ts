import { BaseEntity } from "src/common/abstract-class";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Conversation } from "../conversation/conversation.entity";

@Entity()
@Index(['external_message_id'], { unique: true })
export class Message extends BaseEntity {
    @Column()
    conversation_id!: string;

    @ManyToOne(() => Conversation, (conversation) => conversation.id)
    @JoinColumn({ name: 'conversation_id' })
    @Index()
    conversation!: Conversation;

    @Column({ type: 'jsonb' })
    message!: object;

    @Column({ nullable: true })
    sender_id?: string;

    @Column({ nullable: true })
    recipient_id?: string;

    @Column({ nullable: true })
    external_message_id?: string;

    @Column({ type: 'bigint', nullable: true })
    @Index()
    timestamp?: number;

    @Column({ default: false })
    is_recalled!: boolean;

    @Column({ default: false })
    is_edited!: boolean;

    @Column({ type: 'jsonb', nullable: true })
    edit_history?: object[];
}