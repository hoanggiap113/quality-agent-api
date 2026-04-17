import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UserModule } from './modules/auth/user.module';
import { ChannelModule } from './modules/channel/channel.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
     TypeOrmModule.forRootAsync({
      useFactory: databaseConfig,
    }),
    UserModule,
    ChannelModule,
    ConversationModule,
    MessageModule
  ],
})
export class AppModule {}
