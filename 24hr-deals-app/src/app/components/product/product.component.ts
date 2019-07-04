import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/app/models/product/product-model";
import { MatSnackBar } from "@angular/material/snack-bar";

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

  constructor(private snackBar: MatSnackBar) {}

  buyProduct(id, name) {
    console.log(id);

    //only if the product was successfully added
    this.openSnackBar(name + " has been added to the basket", null);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ["green-snackbar"]
    });
  }

  ngOnInit() {}
}
