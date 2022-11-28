import { Observable } from 'rxjs';
import {
  ICreateProductPricing,
  IDeleteProductPricing,
  IGetProductPricings,
  IProductPricing,
  IUpdateProductPricing,
} from '../dtos/product-pricing.dto.interface';

export interface IProductPricingRepository {
  createProductPricings(
    data: ICreateProductPricing
  ): Observable<IProductPricing>;

  getProductPricings(data: IGetProductPricings): Observable<IProductPricing[]>;

  updateProductPricings(
    data: IUpdateProductPricing
  ): Observable<IProductPricing>;

  deleteProductPricings(data: IDeleteProductPricing): Observable<void>;
}
