import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./modules/components.module";
import { PagesModule } from "./modules/pages.module";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/counter";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FeaturesModule } from "./modules/features.module";
import { InputComponent } from './components/input/input.component';

@NgModule({
     declarations: [AppComponent, InputComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          ComponentsModule,
          FeaturesModule,
          PagesModule,
          StoreModule.forRoot({ counter: counterReducer }),
          BrowserAnimationsModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
