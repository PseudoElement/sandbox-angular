import { ApplicationRef, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { ChildComponent } from "./components/child/child.component";
import { WrapperComponent } from "./components/wrapper/wrapper.component";
import { AboutComponent } from "./pages/about/about.component";
import { ShopComponent } from "./pages/shop/shop.component";
import { SintolLibDynamicComponentService } from "dynamic-rendering";

const routes: Routes = [
     { path: "", redirectTo: "shop", pathMatch: "full" },
     { path: "shop", title: "ShopPage", component: ShopComponent },
     {
          path: "home",
          title: "HomePage",
          component: HomepageComponent,
          children: [{ path: "child", title: "Child", component: ChildComponent }],
     },
     { path: "about", title: "AboutPage", component: AboutComponent },
     { path: "**", component: WrapperComponent },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
     providers: [SintolLibDynamicComponentService]
})
export class AppRoutingModule {}
