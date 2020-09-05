import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './domain/article';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
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
