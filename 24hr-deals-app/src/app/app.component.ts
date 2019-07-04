import { Component, ViewChild } from "@angular/core";
import { AccountService } from "./services/accounts.service";
import { AccountModel } from "./models/account/account-model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private accountService: AccountService) {}

  title = "DailyDeals";
  private subscription = new Subscription();
  private accountNumber: string;

  arrayTest = [1, 2, 3, 4, 5];
  getCategory(value) {
    console.log(value);
  }

  changeLoggedIn() {
    this.accountService.isLoggedIn = !this.accountService.isLoggedIn;
    if (this.accountService.getCurrentAccountId() == undefined)
      this.getAllAccounts();
    else this.accountService.setCurrentAccountId(undefined);
  }

  getAllAccounts() {
    this.subscription.add(
      this.accountService.getAllAccounts().subscribe(res => {
        this.accountNumber = res[0]["_id"];
        console.log(res[0]);
        this.setActiveAccount();
      })
    );
  }

  setActiveAccount() {
    this.accountService.setCurrentAccountId(this.accountNumber);
  }
}
