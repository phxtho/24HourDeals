import { Component, OnInit } from "@angular/core";
import { ProductModel } from "src/app/models/product/product-model";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "src/app/services/product.service";
import { AccountService } from "src/app/services/accounts.service";
import { AccountModel } from "src/app/models/account/account-model";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  private products: ProductModel[];
  private accounts: AccountModel[];
  private account: AccountModel;
  date: Date;
  private subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private accountService: AccountService
  ) {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.getAllProducts();
    // this.getAllAccounts();
  }

  getAllProducts() {
    this.subscription.add(
      this.productService.getAllProducts().subscribe(res => {
        this.products = res;
        console.log(this.products);
      })
    );
  }

  testing(event) {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
