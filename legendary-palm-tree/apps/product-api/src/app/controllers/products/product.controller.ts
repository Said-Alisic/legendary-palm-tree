import { IProduct } from '@libs/application';
import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('')
  async getProducts(): Promise<IProduct[]> {
    const products = await this.productsService.getProducts();

    return products;
  }
}
