import { Injectable } from "@angular/core";
import { TransactionModel } from "../models/transaction/transaction-model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getAllTransactions(accId) {
    return this.httpClient
      .get(this.apiUrl + "/accounts/" + accId + "/transactions")
      .pipe(map(res => res));
  }

  getTransaction() {}

  createTransaction() {}

  updateTransaction() {}
}
