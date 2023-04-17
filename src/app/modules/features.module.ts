import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "../features/user-card/user-card.component";
import { ComponentsModule } from "./components.module";
import { ContactModalComponent } from "../features/contact-modal/contact-modal.component";

@NgModule({
     declarations: [UserCardComponent, ContactModalComponent],
     exports: [UserCardComponent, ContactModalComponent],
     imports: [CommonModule, ComponentsModule],
})
export class FeaturesModule {}
