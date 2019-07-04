import { Injectable } from "@angular/core";
import { BasketItemModel } from "../models/basket-item/basket-item.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product/product-model";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getBasket(accountId) {
    return this.httpClient
      .get<ProductModel[]>(this.apiUrl + "/accounts/" + accountId + "/basket")
      .pipe(map(res => res));
  }

  getBasketItem(accountId, basketItemId) {
    return this.httpClient
      .get<ProductModel>(
        this.apiUrl + "/accounts/" + accountId + "/basket/" + basketItemId
      )
      .pipe(map(res => res));
  }

  addItemToBasket(accountId, basketItem: ProductModel) {
    return this.httpClient
      .post<ProductModel>(
        this.apiUrl + "/accounts/" + accountId + "/basket/",
        basketItem
      )
      .pipe(map(res => res));
  }

  removeItemFromBasket(accountId, basketItemId) {
    return this.httpClient
      .delete(
        this.apiUrl + "/accounts/" + accountId + "/basket/" + basketItemId
      )
      .pipe(map(res => res));
  }

  //   addItemToTransactions(accountId) {}
}
