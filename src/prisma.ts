import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class Prisma extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  onModuleInit(): Promise<void> {
    return this.$connect();
  }

  onModuleDestroy(): Promise<any> {
    return this.$disconnect();
  }
}
