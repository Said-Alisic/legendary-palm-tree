import { Observable } from 'rxjs';
import {
  ICreateProductPricing,
  IGetProductPricings,
  IUpdateProductPricing,
  IDeleteProductPricing,
  IProductPricing,
} from '../dtos/product-pricing.dto.interface';

export interface IProductPricingService {
  createProductPricings(
    data: ICreateProductPricing
  ): Observable<IProductPricing>;

  getProductPricings(data: IGetProductPricings): Observable<IProductPricing[]>;
  updateProductPricings(
    data: IUpdateProductPricing
  ): Observable<IProductPricing>;

  deleteProductPricings(data: IDeleteProductPricing): Observable<void>;
}
