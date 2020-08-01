import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroORM } from 'mikro-orm';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      type: 'mysql',
      entitiesDirs: ['dist/**/domain/**'],
      entitiesDirsTs: ['src/**/domain/**'],
      port: Number(process.env.DB_PORT),
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    }),
    ArticleModule,
  ],
})
export class AppModule {
  constructor(orm: MikroORM) {
    if (process.env.NODE_ENV !== 'production') {
      this.syncDatabase(orm);
    }
  }

  async syncDatabase(orm: MikroORM): Promise<void> {
    const generator = orm.getSchemaGenerator();
    await generator.dropSchema();
    await generator.createSchema();
    await generator.updateSchema();
  }
}
