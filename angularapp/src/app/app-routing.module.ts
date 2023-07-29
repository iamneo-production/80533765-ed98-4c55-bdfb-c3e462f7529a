import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  
  { path:'login', component:LoginComponent},
 
  { path:'signup',component:SignupComponent},
 
  {path:'', redirectTo: '/login',pathMatch:'full'} ,
  
  {path:'admin-home',component:AdminhomeComponent,canActivate: [AuthGuard]},
  {path:'user-home',component:UserhomeComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
