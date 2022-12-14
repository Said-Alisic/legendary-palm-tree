import {
  ICreateProductPricing,
  IDeleteProductPricing,
  IProductPricing,
  IUpdateProductPricing,
} from '../dtos/product-pricing.dto.interface';

// NOTE: Used when an ORM such as TypeORM is unavailable
export interface IProductPricingRepository {
  createProductPricing(data: ICreateProductPricing): Promise<IProductPricing>;

  getProductPricings(): Promise<IProductPricing[]>;

  updateProductPricing(data: IUpdateProductPricing): Promise<IProductPricing>;

  deleteProductPricing(data: IDeleteProductPricing): Promise<void>;
}
