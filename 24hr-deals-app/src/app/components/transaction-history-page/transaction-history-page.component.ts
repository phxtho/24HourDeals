import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TransactionService } from "src/app/services/transaction.service";
import { AccountService } from "src/app/services/accounts.service";

@Component({
  selector: "app-transaction-history-page",
  templateUrl: "./transaction-history-page.component.html",
  styleUrls: ["./transaction-history-page.component.scss"]
})
export class TransactionHistoryPageComponent implements OnInit {
  subscription = new Subscription();
  transactionHistoryItems;
  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.setupSubscriptions();
  }
  setupSubscriptions() {
    let userId = this.accountService.getCurrentAccountId();
    this.subscription.add(
      this.transactionService.getAllTransactions(userId).subscribe(res => {
        this.transactionHistoryItems = res;
        console.log(this.transactionHistoryItems);
      })
    );
  }
}
