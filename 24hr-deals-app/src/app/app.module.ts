import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {HttpClientModule} from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  // exports: [
  //   MatToolbarModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
