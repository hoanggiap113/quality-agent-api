import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
    Max,
    Min,
} from "class-validator";
import { Type } from "class-transformer";
import { SENDER_TYPE } from "src/common/enum";

export class MessageOut {
    id!: string;
    conversation_id!: string;
    external_message_id?: string;
    sender_id?: string;
    sender_type!: SENDER_TYPE;
    recipient_id?: string;
    message!: object;
    timestamp?: number;
    is_recalled!: boolean;
    is_edited!: boolean;
    edit_history?: object[];
    created_at!: Date;
}

export class MessageCreate {
    @IsString()
    @IsNotEmpty()
    channel_id!: string;

    @IsString()
    @IsNotEmpty()
    external_conv_id!: string;

    @IsEnum(SENDER_TYPE)
    @IsNotEmpty()
    sender_type!: SENDER_TYPE

    @IsOptional()
    @IsString()
    customer_id?: string;

    @IsString()
    @IsNotEmpty()
    external_message_id!: string;

    @IsOptional()
    @IsString()
    sender_id?: string;

    @IsOptional()
    @IsString()
    recipient_id?: string;

    @IsObject()
    message!: object;

    @IsOptional()
    @IsNumber()
    timestamp?: number;
}

export class MessageUpdate {
    @IsOptional()
    @IsObject()
    message?: object;

    @IsOptional()
    @IsBoolean()
    is_recalled?: boolean;

    @IsOptional()
    @IsBoolean()
    is_edited?: boolean;

    @IsOptional()
    @IsObject({ each: true })
    edit_history?: object[];
}


export class MessageRecallDto {
    @IsString()
    @IsNotEmpty()
    external_message_id!: string;
}

export class MessageEditDto {
    @IsString()
    @IsNotEmpty()
    external_message_id!: string;

    @IsObject()
    message!: object;
}

export class MessageFilter {
    @IsOptional()
    @IsString()
    conversation_id?: string;

    @IsOptional()
    @IsString()
    sender_id?: string;

    @IsOptional()
    @IsString()
    external_message_id?: string;

    @IsOptional()
    @IsBoolean()
    is_recalled?: boolean;

    @IsOptional()
    @IsBoolean()
    is_edited?: boolean;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    timestamp_from?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    timestamp_to?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number;
}