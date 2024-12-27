// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 导入 Prisma 模块
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
