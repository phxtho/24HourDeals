import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AccountModel } from "../models/account/account-model";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  apiUrl: string = "http://localhost:5000";
  private currentAccountId: string;
  private currentAccountEmail: string;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  public isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) {}

  getAllAccounts() {
    return this.httpClient
      .get<AccountModel[]>(this.apiUrl + "/accounts")
      .pipe(map(res => res));
  }

  setCurrentAccountEmail(accountNumber: string) {
    this.currentAccountEmail = accountNumber;
  }

  getCurrentAccountEmail() {
    return this.currentAccountEmail;
  }

  setCurrentAccountId(accountNumber: string) {
    this.currentAccountId = accountNumber;
  }

  getCurrentAccountId() {
    return this.currentAccountId;
  }

  getAccount(id: string) {
    return this.httpClient
      .get<AccountModel>(this.apiUrl + "/accounts/" + id)
      .pipe(map(res => res));
  }

  createAccounts(account: AccountModel) {
    this.setCurrentAccountEmail(account.email);
    console.log(JSON.stringify(account));
    return this.httpClient
      .post(this.apiUrl + "/accounts/", JSON.stringify(account),this.options).subscribe();
  }
}
