import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasketComponent } from "./components/basket/basket.component";
import { LandingPageComponent } from "./components/home-page/home-page.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "basket", component: BasketComponent },
  { path: "checkout", component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
