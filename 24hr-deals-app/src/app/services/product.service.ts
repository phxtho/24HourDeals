import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ProductModel } from "../models/product/product-model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient
      .get<ProductModel[]>(this.apiUrl + "/products")
      .pipe(map(res => res));
  }

  getProduct(id: number) {
    return this.httpClient
      .get<ProductModel[]>(this.apiUrl + "/products/" + id)
      .pipe(map(res => res));
  }

  createProduct(product: ProductModel) {
    return this.httpClient
      .post<ProductModel[]>(this.apiUrl + "/products/", product)
      .pipe(map(res => res));
  }
  //not completed, waiting on api
  updateAllProducts(test: string) {
    return this.httpClient
      .put<ProductModel[]>(this.apiUrl + "/products/", test)
      .pipe(map(res => res));
  }
  //api failing
  updateProduct(id: number, product: ProductModel) {
    return this.httpClient
      .put<ProductModel[]>(this.apiUrl + "/products/" + id, product)
      .pipe(map(res => res));
  }

  deleteProduct(id: number) {
    return this.httpClient
      .delete(this.apiUrl + "/products/" + id)
      .pipe(map(res => res));
  }
}
