import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepaidComponent } from './prepaid/prepaid.component';



const routes: Routes = [
  {path:'adminPrePaid',component:PrepaidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
