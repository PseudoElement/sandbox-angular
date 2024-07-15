import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "../pages/homepage/homepage.component";
import { AppRoutingModule } from "../app-routing.module";
import { ComponentsModule } from "./components.module";
import { AboutComponent } from "../pages/about/about.component";
import { ShopComponent } from "../pages/shop/shop.component";
import { FeaturesModule } from "./features.module";
import { HomepageService } from "../pages/homepage/services/homepage.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
     declarations: [HomepageComponent, AboutComponent, ShopComponent],
     exports: [HomepageComponent, AboutComponent, ShopComponent],
     imports: [CommonModule, AppRoutingModule, ComponentsModule, FeaturesModule, ReactiveFormsModule],
     providers: [HomepageService]
})
export class PagesModule {}
