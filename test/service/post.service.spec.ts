import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { PostService } from '../../src/service/post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const modRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    service = modRef.get(PostService);
  });

  it('test getHello', () => {
    expect(service.getHello()).toEqual('Hello World!');
  });
});
