import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-transaction-history-item",
  templateUrl: "./transaction-history-item.component.html",
  styleUrls: ["./transaction-history-item.component.scss"]
})
export class TransactionHistoryItemComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() price: number;

  constructor() {}

  ngOnInit() {}
}
