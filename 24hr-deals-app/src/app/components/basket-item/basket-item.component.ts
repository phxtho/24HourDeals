import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-basket-item",
  templateUrl: "./basket-item.component.html",
  styleUrls: ["./basket-item.component.scss"]
})
export class BasketItemComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() price: number;

  constructor() {}

  ngOnInit() {}

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  toggleBasketItemChecked() {}

}
