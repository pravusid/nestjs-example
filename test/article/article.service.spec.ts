import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ArticleService } from '../../src/article/article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const modRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    service = modRef.get(ArticleService);
  });

  it('test getHello', () => {
    expect(service.getHello()).toEqual('Hello World!');
  });
});
