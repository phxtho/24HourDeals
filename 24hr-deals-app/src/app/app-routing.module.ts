import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { AccountPageComponent} from "./components/account-page/account-page.component"
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "basket", component: BasketPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "account", component: AccountPageComponent },
  { path: "checkout", component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
