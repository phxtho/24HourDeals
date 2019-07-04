import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { ProductModel } from "src/app/models/product/product-model";
import { ProductService } from "src/app/services/product.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "src/app/services/accounts.service";
import { TransactionService } from "src/app/services/transaction.service";
import { BasketService } from "src/app/services/basket.service";

@Component({
  selector: "app-checkout-page",
  templateUrl: "./checkout-page.component.html",
  styleUrls: ["./checkout-page.component.scss"]
})
export class CheckoutPageComponent implements OnInit {
  subscription = new Subscription();
  addressForm: FormGroup;
  cardForm: FormGroup;

  cards = [
    {
      name: "Debit",
      owner: "Sarah",
      number: "123456789",
      expires: "15/23"
    },
    {
      name: "Credit",
      owner: "Jane",
      number: "152498763",
      expires: "17/24"
    }
  ];

  addresses = [
    {
      name: "Home",
      line1: "35 Cool Street",
      line2: "Awesomeville",
      line3: "Dreamland"
    },
    {
      name: "Work",
      line1: "35 Boring Street",
      line2: "Sleepville",
      line3: "Hell"
    }
  ];

  private checkoutItems;

  private totalPrice: number;

  constructor(
    private http: HttpClient,
    private apiService: ProductService,
    private basketService: BasketService,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.buildForm();
    this.setupSubscriptions();
  }

  buildForm() {
    this.addressForm = this.formBuilder.group({
      addressControl: this.addresses[0].name
    });

    this.cardForm = this.formBuilder.group({
      cardControl: this.cards[0].name
    });
  }

  setupSubscriptions() {
    let userId = this.accountService.getCurrentAccountId();
    this.subscription.add(
      this.basketService.getBasket(userId).subscribe(res => {
        this.checkoutItems = res;
        this.totalPrice = this.getTotalPrice();
      })
    );
  }

  getTotalPrice() {
    let total = 0;
    for (let checkoutItem of this.checkoutItems) {
      total += checkoutItem.price;
    }
    return total;
  }

  cancel() {}

  pay() {
    this.openSnackBar("Successfully paid", null);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
