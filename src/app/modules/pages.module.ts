import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "../pages/homepage/homepage.component";
import { AppRoutingModule } from "../app-routing.module";
import { ComponentsModule } from "./components.module";
import { AboutComponent } from "../pages/about/about.component";
import { ShopComponent } from "../pages/shop/shop.component";
import { FeaturesModule } from "./features.module";

@NgModule({
     declarations: [HomepageComponent, AboutComponent, ShopComponent],
     exports: [HomepageComponent, AboutComponent, ShopComponent],
     imports: [CommonModule, AppRoutingModule, ComponentsModule, FeaturesModule],
})
export class PagesModule {}
