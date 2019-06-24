import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../products-model.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  private url = "http://localhost:5000";
  private products : [];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }

  getProducts() {
    console.log("works");
    return this.http.get(this.url + '/products').pipe(
      map(res => res['products'])
    )
      // this.products = res;
  }

}
