import { Column, Entity } from 'typeorm';
import { Base } from '../common/base.entity';
import { MarketEnum } from '../enums/market.enum';

@Entity('product-pricings')
export class ProductPricing extends Base {
  @Column({ type: 'uuid' })
  productId: string;

  @Column()
  price: number;

  @Column({ type: 'text' })
  market: MarketEnum;
}
