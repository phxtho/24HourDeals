import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BootstrapModalModule } from 'ng6-bootstrap-modal';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CountDown } from "ng2-date-countdown";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { BasketItemComponent } from "./components/basket-item/basket-item.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { CheckoutItemComponent } from "./components/checkout-item/checkout-item.component";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { ProductComponent } from "./components/product/product.component";
import { BasketPageComponent } from "./components/basket-page/basket-page.component";
import { TransactionHistoryPageComponent } from "./components/transaction-history-page/transaction-history-page.component";
import { TransactionHistoryItemComponent } from "./components/transaction-history-item/transaction-history-item.component";

@NgModule({
  declarations: [
    AppComponent,
    BasketPageComponent,
    CountDown,
    LandingPageComponent,
    BasketItemComponent,
    CheckoutPageComponent,
    CheckoutItemComponent,
    LoginPageComponent,
    SignupPageComponent,
    ChangePasswordPageComponent,
    AccountPageComponent,
    ProductComponent,
    TransactionHistoryPageComponent,
    TransactionHistoryItemComponent
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
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
