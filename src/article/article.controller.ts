import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Article } from '@prisma/client';
import { ArticleService } from './article.service';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('hello')
  getHello(): string {
    return this.articleService.getHello();
  }

  @Get(':id')
  getArticle(@Param('id') id: string): Promise<Article> {
    return this.articleService.getArticle(Number(id));
  }

  @Post()
  createArticle(@Body() article: Article): Promise<void> {
    return this.articleService.createArticle(article);
  }
}
