import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [
  
  {path:'', redirectTo: '/notification',pathMatch:'full'} ,
  {path:'notification',component:NotificationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }



