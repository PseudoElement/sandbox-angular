import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ChildComponent } from './components/child/child.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'HomePage',
    component: HomepageComponent,
    children: [{ path: 'child', title: 'Child', component: ChildComponent }],
  },
  { path: 'about', title: 'AboutPage', component: AboutComponent },
  { path: '**', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
