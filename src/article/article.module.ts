import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { ArticleController } from './article.controller';
import { Article } from './domain/article';
import { ArticleService } from './service/article.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Article] })],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
