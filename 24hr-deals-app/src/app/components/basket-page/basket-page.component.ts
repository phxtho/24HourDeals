import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { ProductModel } from "src/app/models/product/product-model";
import { Subscription } from "rxjs";
import { BasketService } from "src/app/services/basket.service";
import { AccountService } from "src/app/services/accounts.service";
import { BasketItemComponent } from "../basket-item/basket-item.component";

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

  @ViewChild(BasketItemComponent, { static: false })
  basketItemComponent: BasketItemComponent;

  ngOnInit() {
    let userId = this.accountService.getCurrentAccountId();
    this.subscription.add(
      this.basketService.getBasket(userId).subscribe(res => {
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

  updatePrice(price) {
    this.totalPrice += price;
  }

  checkout() {
    let test = 0;
    for (let basketItem of this.basketItems) {
      //setting the stock value
      test = this.basketItemComponent.getQuantity();
      console.log(test);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
