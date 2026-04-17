import { IsEnum, IsOptional, IsString, IsDateString, IsInt, Min, Max } from "class-validator";
import { Type } from "class-transformer";
import {
    CONVERSATION_STATUS,
    CONVERSATION_CATEGORY,
} from "src/common/enum";
import { ApiPropertyOptional } from "@nestjs/swagger";


export class ConversationOut {
    id!: string;
    channel_id!: string;
    external_conv_id!: string;
    customer_id?: string;
    assigned_staff_id?: string;
    status!: CONVERSATION_STATUS;
    category?: CONVERSATION_CATEGORY;
    started_at?: Date;
    ended_at?: Date;
    created_at!: Date;
}


export class ConversationCreate {
    @IsString()
    channel_id!: string;

    @IsString()
    external_conv_id!: string;

    @IsOptional()
    @IsString()
    customer_id?: string;

    @IsOptional()
    @IsString()
    assigned_staff_id?: string;

    @IsOptional()
    @IsEnum(CONVERSATION_STATUS)
    status?: CONVERSATION_STATUS;

    @IsOptional()
    @IsEnum(CONVERSATION_CATEGORY)
    category?: CONVERSATION_CATEGORY;

    @IsOptional()
    @IsDateString()
    started_at?: string;

    @IsOptional()
    @IsDateString()
    ended_at?: string;
}


export class ConversationUpdate {
    @IsOptional()
    @IsString()
    assigned_staff_id?: string;

    @IsOptional()
    @IsEnum(CONVERSATION_STATUS)
    status?: CONVERSATION_STATUS;

    @IsOptional()
    @IsEnum(CONVERSATION_CATEGORY)
    category?: CONVERSATION_CATEGORY;

    @IsOptional()
    @IsDateString()
    started_at?: string;

    @IsOptional()
    @IsDateString()
    ended_at?: string;
}

export class ConversationFilter {
    @ApiPropertyOptional() 
    @IsOptional()
    @IsString()
    channel_id?: string;

    @ApiPropertyOptional({enum: CONVERSATION_STATUS}) 
    @IsOptional()
    @IsEnum(CONVERSATION_STATUS)
    status?: CONVERSATION_STATUS;


    @ApiPropertyOptional({enum: CONVERSATION_CATEGORY}) 
    @IsOptional()
    @IsEnum(CONVERSATION_CATEGORY)
    category?: CONVERSATION_CATEGORY;

    @ApiPropertyOptional() 
    @IsOptional()
    @IsString()
    customer_id?: string;


    @ApiPropertyOptional() 
    @IsOptional()
    @IsString()
    assigned_staff_id?: string;

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