import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'mikro-orm';
import { InjectRepository } from 'nestjs-mikro-orm';
import { Article } from '../domain/article';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private articleRepository: EntityRepository<Article>) {}

  getHello(): string {
    return 'Hello World!';
  }

  getArticle(id: number): Promise<Article> {
    return this.articleRepository.findOne({ id });
  }

  createArticle(article: Partial<Article>): Promise<void> {
    const newArticle = this.articleRepository.create(article);
    return this.articleRepository.persistAndFlush(newArticle);
  }
}
