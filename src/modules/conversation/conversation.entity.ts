import { BaseEntity } from "src/common/abstract-class";
import {
    CONVERSATION_STATUS,
    CONVERSATION_CATEGORY,
    SENDER_TYPE,
} from "src/common/enum";
import { Column, Entity, Index, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Channel } from "../channel/channel.entity";
import { Message } from "../message/message.entity";
import { ConversationScore } from "../scoring/conversation-score.entity";

@Entity()
@Index(["channel_id", "external_conv_id"], { unique: true })
export class Conversation extends BaseEntity {
    @Column()
    channel_id!: string;

    @ManyToOne(() => Channel)
    @JoinColumn({ name: "channel_id" })
    channel!: Channel;

    @Column()
    @Index()
    external_conv_id!: string;

    @Column({ nullable: true })
    @Index()
    customer_id?: string;

    @Column({ nullable: true })
    assigned_staff_id?: string;

    @Column({
        type: "enum",
        enum: CONVERSATION_STATUS,
        default: CONVERSATION_STATUS.OPEN,
    })
    @Index()
    status!: CONVERSATION_STATUS;

    @Column({
        type: "enum",
        enum: CONVERSATION_CATEGORY,
        nullable: true,
    })
    category?: CONVERSATION_CATEGORY;

    @Column({ type: "timestamp", nullable: true })
    started_at?: Date;

    @Column({ type: "timestamp", nullable: true })
    ended_at?: Date;

    @OneToMany(() => Message, (message) => message.conversation)
    messages!: Message[];

    @OneToMany(() => ConversationScore, (score) => score.conversation)
    scores!: ConversationScore[];

    @Column({ type: 'timestamp', nullable: true })
    last_message_at?: Date;
}