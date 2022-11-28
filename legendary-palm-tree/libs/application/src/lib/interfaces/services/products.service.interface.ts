import { IProduct } from '../dtos/product.dto.interface';

export interface IProductsService {
  getProducts(): Promise<IProduct[]>;
}
