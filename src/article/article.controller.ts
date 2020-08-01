import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Article } from './domain/article';
import { ArticleService } from './service/article.service';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getHello(): string {
    return this.articleService.getHello();
  }

  @Get(':id')
  getArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Post()
  createArticle(@Body() article: Article): Promise<void> {
    return this.articleService.createArticle(article);
  }
}
