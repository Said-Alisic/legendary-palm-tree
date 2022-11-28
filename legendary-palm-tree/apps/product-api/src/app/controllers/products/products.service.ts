import { IProduct, IProductsService } from '@libs/application';
import { Product } from '@libs/domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>
  ) {}

  async getProducts(): Promise<IProduct[]> {
    // Prepare products seed data
    const productsSeed = [
      {
        name: 'Product 1',
        description: 'Product 1 description',
      },
      {
        name: 'Product 2',
        description: 'Product 2 description',
      },
      {
        name: 'Product 3',
        description: 'Product 3 description',
      },
      {
        name: 'Product 4',
        description: 'Product 4 description',
      },
      {
        name: 'Product 5',
        description: 'Product 5 description',
      },
    ];

    // Check if products exist to not reseed
    const productsExist = await this.productsRepo.findAndCount();

    if (productsExist[1] === 0) {
      // Create new products seeding data
      await this.productsRepo.save(productsSeed);
    }

    // Find all products
    const products = this.productsRepo.find();

    return products;
  }
}
