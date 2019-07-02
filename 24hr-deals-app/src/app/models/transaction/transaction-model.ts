import { ProductModel } from '../product/product-model';

export class TransactionModel {
  id: number;
  products: ProductModel;
  captureDate: string;
  deliveryAddress: string;
  billingInformation: string;
}
