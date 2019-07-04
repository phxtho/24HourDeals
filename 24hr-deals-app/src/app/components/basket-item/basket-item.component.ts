import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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

  @Output()
  updateTotalPrice = new EventEmitter<number>();

  originalPrice: number;

  constructor() {}

  ngOnInit() {
    this.originalPrice = this.price;
  }

  increaseQuantity() {
    this.quantity++;

    this.updatePrice();

    
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updatePrice();
    }
  }

  updatePrice() {
    let priceBefore = this.price;
    this.price = this.originalPrice * this.quantity;
    this.updateTotalPrice.emit(this.price - priceBefore);
  }

  removeItem() {}

  updateQuantity() {}

  getQuantity() {
    return this.quantity;
  }
}
