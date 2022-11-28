import { MarketEnum } from '@libs/domain';

export interface IProductPricing {
  id?: string;
  productId: string;
  price: number;
  market: MarketEnum;
}

export interface ICreateProductPricing {
  productId: string;
  price: number;
  market: MarketEnum;
}

export interface IUpdateProductPricing {
  id: string;
  price: number;
}
export interface IDeleteProductPricing {
  id: string;
}
