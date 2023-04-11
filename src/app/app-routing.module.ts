import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ChildComponent } from './components/child/child.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    title: 'Homepage',
    component: HomepageComponent,
    children: [{ path: 'child', title: 'Child', component: ChildComponent }],
  },
  { path: '**', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
