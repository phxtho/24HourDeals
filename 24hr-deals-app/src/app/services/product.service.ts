import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ProductModel } from "../models/product/product-model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient
      .get(this.apiUrl + "/products")
      .pipe(map(res => res["products"]));
  }

  getProduct(id: number) {
    return this.httpClient
      .get(this.apiUrl + "/products/" + id)
      .pipe(map(res => res["product"]));
  }

  createProduct(product: ProductModel) {
    return this.httpClient
      .post(this.apiUrl + "/products/", product)
      .pipe(map(res => res["product"]));
  }
  //not completed, waiting on api
  updateAllProducts(test: string) {
    return this.httpClient
      .put(this.apiUrl + "/products/", test)
      .pipe(map(res => res["product"]));
  }
  //api failing
  updateProduct(id: number, product: ProductModel) {
    return this.httpClient
      .put(this.apiUrl + "/products/" + id, product)
      .pipe(map(res => res["product"]));
  }

  deleteProduct(id: number) {
    return this.httpClient
      .delete(this.apiUrl + "/products/" + id)
      .pipe(map(res => res));
  }
}
