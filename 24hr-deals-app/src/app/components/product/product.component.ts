import { Component, OnInit, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "src/app/services/accounts.service";
import { BasketService } from "src/app/services/basket.service";
import { ProductModel } from "src/app/models/product/product-model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() id: string;
  @Input() name: string;
  @Input() category: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() dealEndTime: number;
  @Input() price: number;

  constructor(
    private snackBar: MatSnackBar,
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  buyProduct() {
    let userId = this.accountService.getCurrentAccountId();
    console.log(userId);
    console.log(this.product);
    let obj = {
      basket: {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        stock: this.quantity,
        dealEndTime: this.dealEndTime
      }
    };
    this.basketService
      .addItemToBasket(userId, JSON.stringify(obj))
      .subscribe(res => {
        console.log(res);
      });

    //only if the product was successfully added
    this.openSnackBar(name + " has been added to the basket", null);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ["green-snackbar"]
    });
  }

  ngOnInit() {}
}
