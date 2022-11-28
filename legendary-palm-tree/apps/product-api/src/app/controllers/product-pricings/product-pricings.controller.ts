import {
  ICreateProductPricing,
  IUpdateProductPricing,
  IProductPricing,
  IDeleteProductPricing,
} from '@libs/application';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductPricingsService } from './product-pricings.service';

@Controller('product/pricings')
export class ProductPricingsController {
  constructor(
    private readonly productPricingsService: ProductPricingsService
  ) {}

  @Post('')
  async createProductPricing(
    @Body() data: ICreateProductPricing
  ): Promise<IProductPricing> {
    const newProductPricing =
      await this.productPricingsService.createProductPricing(data);

    return newProductPricing;
  }

  @Get('')
  async getProductPricings(): Promise<IProductPricing[]> {
    const productPricings =
      await this.productPricingsService.getProductPricings();

    return productPricings;
  }

  @Patch('/:id')
  async updateProductPricing(
    @Param() params: IUpdateProductPricing,
    @Body() data: IUpdateProductPricing
  ): Promise<IProductPricing> {
    const { id } = params;

    const updatedProductPricing =
      await this.productPricingsService.updateProductPricing({ id, ...data });

    return updatedProductPricing;
  }

  @Delete(':id')
  async deleteProductPricing(
    @Param() params: IDeleteProductPricing
  ): Promise<void> {
    const { id } = params;
    const productPricings =
      await this.productPricingsService.deleteProductPricing({ id });

    return productPricings;
  }
}
