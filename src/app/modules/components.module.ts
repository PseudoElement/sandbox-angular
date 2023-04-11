import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../components/child/child.component';
import { WrapperComponent } from '../components/wrapper/wrapper.component';

@NgModule({
  declarations: [ChildComponent, WrapperComponent],
  exports: [ChildComponent, WrapperComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
