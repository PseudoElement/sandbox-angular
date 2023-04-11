import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from './components.module';

@NgModule({
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  imports: [CommonModule, AppRoutingModule, ComponentsModule],
})
export class PagesModule {}
