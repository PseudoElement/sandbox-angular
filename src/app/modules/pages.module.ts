import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from './components.module';
import { AboutComponent } from '../pages/about/about.component';

@NgModule({
  declarations: [HomepageComponent, AboutComponent],
  exports: [HomepageComponent, AboutComponent],
  imports: [CommonModule, AppRoutingModule, ComponentsModule],
})
export class PagesModule {}
