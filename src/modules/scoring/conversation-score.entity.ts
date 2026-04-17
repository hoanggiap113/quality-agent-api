import { BaseEntity } from "src/common/abstract-class";
import {
    SCORE_STATUS,
    SCORE_CATEGORY,
} from "src/common/enum";
import { Column, Entity, Index, ManyToOne, JoinColumn } from "typeorm";
import { Conversation } from "../conversation/conversation.entity";
// import { AiSetting } from "./ai-setting.entity";

@Entity()
export class ConversationScore extends BaseEntity {
    @Column()
    @Index()
    conversation_id!: string;

    @ManyToOne(() => Conversation, (conv) => conv.scores)
    @JoinColumn({ name: "conversation_id" })
    conversation!: Conversation;

    @Column()
    ai_setting_id!: string;

    // @ManyToOne(() => AiSetting)
    // @JoinColumn({ name: "ai_setting_id" })
    // ai_setting!: AiSetting;

    @Column({ type: "int", nullable: true })
    score?: number;

    @Column({
        type: "enum",
        enum: SCORE_CATEGORY,
        nullable: true,
    })
    category?: SCORE_CATEGORY;

    @Column({ type: "text", nullable: true })
    reason?: string;

    @Column({
        type: "enum",
        enum: SCORE_STATUS,
        default: SCORE_STATUS.PENDING,
    })
    @Index()
    status!: SCORE_STATUS;

    @Column({ type: "text", nullable: true })
    error_message?: string;

    @Column({ type: "int", default: 0 })
    retry_count!: number;

    @Column({ type: "timestamp", nullable: true })
    scored_at?: Date;
}