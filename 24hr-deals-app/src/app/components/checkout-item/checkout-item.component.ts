import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkout-item",
  templateUrl: "./checkout-item.component.html",
  styleUrls: ["./checkout-item.component.scss"]
})
export class CheckoutItemComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() price: number;

  constructor() {}

  ngOnInit() {}
}
