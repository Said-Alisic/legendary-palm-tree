import { Column, Entity } from 'typeorm';
import { Base } from '../common/base.entity';

@Entity('products')
export class Product extends Base {
  @Column()
  name: string;

  @Column()
  description: string;
}
