import { Entity, PrimaryKey, Property } from 'mikro-orm';

@Entity()
export class Article {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  content: string;
}
