import { ProductPricing } from '@libs/domain';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPricingsController } from './product-pricings.controller';
import { ProductPricingsService } from './product-pricings.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPricing])],
  controllers: [ProductPricingsController],
  providers: [ProductPricingsService],
})
export class ProductPricingsModule {}
