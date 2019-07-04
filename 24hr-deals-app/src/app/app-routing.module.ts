import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { BasketPageComponent } from './components/basket-page/basket-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "basket", component: BasketPageComponent },
  { path: "checkout", component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
