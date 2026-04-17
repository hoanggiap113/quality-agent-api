import { IsNotEmpty, IsEnum, IsOptional, IsBoolean, IsString,IsIn } from "class-validator";
import * as _enum from "src/common/enum";
import { PartialType } from '@nestjs/mapped-types'

export class CreateChannelDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsEnum(_enum.ChannelType)
    type!: _enum.ChannelType;

    @IsNotEmpty()
    @IsEnum(_enum.CHANNEL_STATUS)
    status!: _enum.CHANNEL_STATUS;

    @IsOptional()
    @IsIn(['5', '15', '30', '60'] as _enum.SyncInterval[])
    sync_interval?: _enum.SyncInterval;

    @IsOptional()
    @IsBoolean()
    save_media?: boolean;

    @IsOptional()
    @IsString()
    app_id?: string;
}

export class UpdateChannelDto extends PartialType(CreateChannelDto) {}