import { TransactionModel } from "../transaction/transaction-model";

export class AccountModel {
  id: number;
  username: string;
  email: string;
  basket: TransactionModel;
  previousTransaction: TransactionModel;
  addresses: string[];
  billingDetails: string[];
}
