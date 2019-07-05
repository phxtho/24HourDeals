import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { AccountPageComponent} from "./components/account-page/account-page.component"
import { AuthGuardService } from './guards/auth-guard.service';
import { TransactionHistoryPageComponent } from "./components/transaction-history-page/transaction-history-page.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "home",
    component: LandingPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "basket",
    component: BasketPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "transaction-history",
    component: TransactionHistoryPageComponent,
    canActivate: [AuthGuardService]
  },
  { path: "account", component: AccountPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  {
    path: "checkout",
    component: CheckoutPageComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
