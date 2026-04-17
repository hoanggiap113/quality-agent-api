import { IsOptional, IsEnum, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger"; 
import { ChannelType, CHANNEL_STATUS } from "src/common/enum";

export class ChannelFilterDto {
    @ApiPropertyOptional() 
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ enum: ChannelType })
    @IsOptional()
    @IsEnum(ChannelType)
    type?: ChannelType;

    @ApiPropertyOptional({ enum: CHANNEL_STATUS })
    @IsOptional()
    @IsEnum(CHANNEL_STATUS)
    status?: CHANNEL_STATUS;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    app_id?: string;

    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    page?: number = 1;

    @ApiPropertyOptional({ default: 10 })
    @IsOptional()
    limit?: number = 10;
}