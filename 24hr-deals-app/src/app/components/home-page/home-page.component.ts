import { Component, OnInit } from "@angular/core";
import { ProductModel } from "src/app/models/product/product-model";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  private products: ProductModel[];
  date: Date;
  private subscription = new Subscription();

  constructor(private http: HttpClient, private apiService: ProductService) {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.subscription.add(
      this.apiService.getAllProducts().subscribe(res => {
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
