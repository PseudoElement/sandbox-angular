import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildComponent } from "../components/child/child.component";
import { WrapperComponent } from "../components/wrapper/wrapper.component";
import { TransitionWrapperComponent } from "../components/transition-wrapper/transition-wrapper.component";

@NgModule({
     declarations: [ChildComponent, WrapperComponent, TransitionWrapperComponent],
     exports: [ChildComponent, WrapperComponent, TransitionWrapperComponent],
     imports: [CommonModule],
})
export class ComponentsModule {}
