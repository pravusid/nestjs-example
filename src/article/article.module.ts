import { Module } from '@nestjs/common';
import { Prisma } from '../prisma';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [Prisma, ArticleService],
})
export class ArticleModule {}
