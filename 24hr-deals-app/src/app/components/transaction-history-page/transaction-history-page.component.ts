import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-transaction-history-page",
  templateUrl: "./transaction-history-page.component.html",
  styleUrls: ["./transaction-history-page.component.css"]
})
export class TransactionHistoryPageComponent implements OnInit {
  subscription = new Subscription();
  // constructor(productService: Prof) { }

  ngOnInit() {}
  // setupSubscriptions() {
  //   this.subscription.add(
  //     this.apiService.getAllProducts().subscribe(res => {
  //       this.checkoutItems = res;
  //       this.totalPrice = this.getTotalPrice();
  //     })
  //   );
  // }
}
