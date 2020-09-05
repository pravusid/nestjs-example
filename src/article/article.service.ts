import { Injectable } from '@nestjs/common';
import { ArticleCreateInput } from '@prisma/client';
import { Prisma } from '../prisma';
import { Article } from './domain/article';

@Injectable()
export class ArticleService {
  constructor(private prisma: Prisma) {}

  getHello(): string {
    return 'Hello World!';
  }

  getArticle(id: number): Promise<Article> {
    return this.prisma.article.findOne({ where: { id } });
  }

  async createArticle(article: ArticleCreateInput): Promise<void> {
    await this.prisma.article.create({ data: article });
  }
}
