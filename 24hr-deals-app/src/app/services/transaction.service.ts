import { HttpClient } from "selenium-webdriver/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) {}

  getAllTransactions() {}

  getTransaction() {}

  createTransaction(){}

  updateTransaction(){}
}
