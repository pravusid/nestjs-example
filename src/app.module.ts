import { Module } from '@nestjs/common';
import { PostController } from './api/post.controller';
import { PostService } from './service/post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
