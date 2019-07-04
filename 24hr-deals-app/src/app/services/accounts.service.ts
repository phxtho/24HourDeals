import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { AccountModel } from "../models/account/account-model";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getAllAccounts() {
    return this.httpClient
      .get<AccountModel[]>(this.apiUrl + "/accounts")
      .pipe(map(res => res["accounts"]));
  }

  getAccount(id: number) {
    return this.httpClient
      .get<AccountModel[]>(this.apiUrl + "/accounts/" + id)
      .pipe(map(res => res["account"]));
  }

  createAccounts(account: AccountModel) {
    return this.httpClient
      .post<AccountModel[]>(this.apiUrl + "/accounts/", account)
      .pipe(map(res => res["account"]));
  }
}
