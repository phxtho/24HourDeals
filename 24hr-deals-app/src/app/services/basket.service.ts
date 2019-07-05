import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductModel } from "../models/product/product-model";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  apiUrl: string = "http://localhost:5000";
  private _getHeaders(): Headers {
    let header = new Headers({
      "Content-Type": "application/json"
    });

    return header;
  }

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

  addItemToBasket(accountId, basketItem) {
    console.log("called");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.put(
      this.apiUrl + "/accounts/" + accountId + "/basket/",
      basketItem,
      httpOptions
    ).pipe(map(res => res));
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
