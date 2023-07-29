import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';



const routes: Routes = [
  {path:'adminPrePaid',component:PrepaidComponent},
  {path:'', redirectTo: '/adminPrePaid',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
