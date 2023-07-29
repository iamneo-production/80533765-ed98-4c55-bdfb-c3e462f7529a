import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { NotifcationComponent } from './notifcation/notifcation.component';



const routes: Routes = [
  
  {path:'', redirectTo: '/notifcation',pathMatch:'full'} ,
 
  {path:'notifcation',component:NotifcationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
