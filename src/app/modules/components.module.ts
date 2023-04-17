import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildComponent } from "../components/child/child.component";
import { WrapperComponent } from "../components/wrapper/wrapper.component";
import { TransitionWrapperComponent } from "../components/transition-wrapper/transition-wrapper.component";
import { BackdropComponent } from "../components/backdrop/backdrop.component";
import { ModalComponent } from "../components/modal/modal.component";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "../components/button/button.component";

@NgModule({
     declarations: [ChildComponent, WrapperComponent, TransitionWrapperComponent, BackdropComponent, ModalComponent, ButtonComponent],
     exports: [ChildComponent, WrapperComponent, TransitionWrapperComponent, BackdropComponent, ModalComponent, MatIconModule, ButtonComponent],
     imports: [CommonModule, MatIconModule],
})
export class ComponentsModule {}
