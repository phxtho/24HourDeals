import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { interval, Observable, Subscription } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  private url = "http://localhost:5000";
  private products: ProductModel[];
  date: Date;
  private future: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;


  constructor(private http: HttpClient, private apiService: ApiService) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnInit() {
    this.getAllProducts();

  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }

  testing(event) {
    this.getAllProducts()
  }

  // ngAfterViewChecked() {
  //   if (this.products != undefined) {
  //     this.future = new Date(this.products[0].dealStartTime);
  //     this.counter$ = interval(1000).pipe(map((x) => {
  //       return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
  //     }));
  //     this.subscription = this.counter$.subscribe((x) => this.message = this.timeLeft(x));
  //     if (this.message === null) {
  //       this.getAllProducts();
  //     }
  //   }
  // }
  // timeLeft(t) {
  //   if (t < 0) return null;
  //   var hours, minutes, seconds;
  //   hours = Math.floor(t / 3600) % 24;
  //   t -= hours * 3600;
  //   minutes = Math.floor(t / 60) % 60;
  //   t -= minutes * 60;
  //   seconds = t % 60;

  //   return [
  //     hours + 'h',
  //     minutes + 'm',
  //     seconds + 's'
  //   ].join(' ');
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
