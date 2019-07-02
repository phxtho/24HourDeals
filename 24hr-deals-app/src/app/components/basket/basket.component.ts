import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ProductModel } from "src/app/models/product/product-model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit, OnDestroy {
  private basketItems = new Array<ProductModel>();
  private subscription = new Subscription();
  private totalPrice: number;

  //make sure to replace ApiService with TransactionService
  constructor(private apiService: ProductService) {}

  ngOnInit() {
    //using the product service for now
    this.subscription.add(
      this.apiService.getAllProducts().subscribe(res => {
        this.basketItems = res;
        this.totalPrice = this.getTotalPrice();
      })
    );
  }

  getTotalPrice() {
    let total = 0;
    for (let basketItem of this.basketItems) {
      total += basketItem.price;
    }
    return total;
  }

  checkout() {
    //check each
  }

  removeItems() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
