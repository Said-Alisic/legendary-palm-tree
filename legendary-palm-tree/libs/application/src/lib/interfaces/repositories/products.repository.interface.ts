import { IProduct } from '../dtos/product.dto.interface';

export interface IProductsRepository {
  getProducts(): Promise<IProduct[]>;

  seedProducts(): Promise<void>;
}
