import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", canActivate: [AuthGuardService]},
  { path: "home", component: LandingPageComponent, canActivate: [AuthGuardService]},
  { path: "basket", component: BasketPageComponent, canActivate: [AuthGuardService]},
  { path: "checkout", component: CheckoutPageComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
