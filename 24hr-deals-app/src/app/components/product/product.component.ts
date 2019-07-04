import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/app/models/product/product-model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() category: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() dealEndTime: number;
  @Input() price: number;

  constructor() {}

  buyProduct(name) {
    console.log(name);
  }

  ngOnInit() {}
}
