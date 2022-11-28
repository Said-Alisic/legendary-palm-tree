import {
  ICreateProductPricing,
  IDeleteProductPricing,
  IProductPricing,
  IProductPricingsService,
  IUpdateProductPricing,
} from '@libs/application';
import { ProductPricing } from '@libs/domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductPricingsService implements IProductPricingsService {
  constructor(
    @InjectRepository(ProductPricing)
    private readonly productPricingsRepo: Repository<ProductPricing>
  ) {}

  async createProductPricing(
    data: ICreateProductPricing
  ): Promise<IProductPricing> {
    // Create new product pricing with data
    const newProductPricing = this.productPricingsRepo.save(data);

    return newProductPricing;
  }

  async getProductPricings(): Promise<IProductPricing[]> {
    // Find all product pricings
    const productPricings = this.productPricingsRepo.find();

    return productPricings;
  }

  async updateProductPricing(
    data: IUpdateProductPricing
  ): Promise<IProductPricing> {
    const { id, price } = data;

    // Find current product pricing by id
    const productPricing = await this.productPricingsRepo.findOneByOrFail({
      id: id,
    });

    // Update current product pricing with new data
    const updatedProductPricings = this.productPricingsRepo.save({
      ...productPricing,
      price,
    });

    return updatedProductPricings;
  }

  async deleteProductPricing(data: IDeleteProductPricing): Promise<void> {
    const { id } = data;

    // Delete product pricing by id
    this.productPricingsRepo.delete({ id: id });
  }
}
