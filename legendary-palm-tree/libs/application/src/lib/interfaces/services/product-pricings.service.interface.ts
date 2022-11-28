import {
  ICreateProductPricing,
  IUpdateProductPricing,
  IDeleteProductPricing,
  IProductPricing,
} from '../dtos/product-pricing.dto.interface';

export interface IProductPricingsService {
  createProductPricing(data: ICreateProductPricing): Promise<IProductPricing>;

  getProductPricings(): Promise<IProductPricing[]>;

  updateProductPricing(data: IUpdateProductPricing): Promise<IProductPricing>;

  deleteProductPricing(data: IDeleteProductPricing): Promise<void>;
}
