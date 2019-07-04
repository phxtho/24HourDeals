import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'DailyDeals';

  arrayTest = [1,2,3,4,5];
  getCategory(value) {
    console.log(value);
  }

}
