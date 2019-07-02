import { TransactionModel } from "../transaction/transaction-model";

export class AccountModel {
  id: number;
  userId: number;
  email: string;
  name: string;
  transactions: TransactionModel;
  addresses: string;
  billingDetails: string;
}
