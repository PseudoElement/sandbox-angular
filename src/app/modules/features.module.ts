import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "../features/user-card/user-card.component";
import { ComponentsModule } from "./components.module";

@NgModule({
     declarations: [UserCardComponent],
     exports: [UserCardComponent],
     imports: [CommonModule, ComponentsModule],
})
export class FeaturesModule {}
