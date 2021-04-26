import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('ArticleController', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const adapter = new FastifyAdapter({ logger: true });
    app = await moduleFixture.createNestApplication<NestFastifyApplication>(adapter).init();
    // https://github.com/fastify/help/issues/228
    await adapter.getInstance().ready();
  });

  it('GET /hello', () => {
    return request(app.getHttpServer()).get('/hello').expect(200).expect('Hello World!');
  });
});
