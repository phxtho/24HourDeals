import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ProductModel } from "src/app/models/product/product-model";
import { Subscription } from "rxjs";
import { BasketItemModel } from "src/app/models/basket-item/basket-item.model";
import { BasketService } from "src/app/services/basket.service";
import { AccountService } from "src/app/services/accounts.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket-page.component.html",
  styleUrls: ["./basket-page.component.scss"]
})
export class BasketPageComponent implements OnInit, OnDestroy {
  private basketItems = new Array<ProductModel>();
  private subscription = new Subscription();
  private totalPrice: number;

  //make sure to replace ApiService with TransactionService
  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    // this.subscription.add(
    //   this.basketService.getBasket(1).subscribe(res => {
    //     this.basketItems = res;
    //     this.totalPrice = this.getTotalPrice();

    //     //uncheck all the basket items by default
    //   })
    // );

    this.subscription.add(
      this.productService.getAllProducts().subscribe(res => {
        this.basketItems = res;
        this.totalPrice = this.getTotalPrice();

        //uncheck all the basket items by default
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
    for (let basketItem of this.basketItems) {
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
