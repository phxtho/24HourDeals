import { Injectable } from "@angular/core";
import { BasketItemModel } from "../models/basket-item/basket-item.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getBasket(accountId) {
    return this.httpClient
      .get<BasketItemModel[]>(
        this.apiUrl + "/accounts/" + accountId + "/basket"
      )
      .pipe(map(res => res));
  }

  getBasketItem(accountId, basketItemId) {
    return this.httpClient
      .get<BasketItemModel>(
        this.apiUrl + "/accounts/" + accountId + "/basket/" + basketItemId
      )
      .pipe(map(res => res));
  }

  addItemToBasket(accountId, basketItem: BasketItemModel) {
    return this.httpClient
      .post<BasketItemModel>(
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
