import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularPlansComponent } from './popular-plans/popular-plans.component';

const routes: Routes = [
  {path:'', redirectTo: '/popularplans',pathMatch:'full'} ,
  {path:'popularplans',component:PopularPlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
