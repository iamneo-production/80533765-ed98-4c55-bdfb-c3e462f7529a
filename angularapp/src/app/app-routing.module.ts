import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditPlansComponent } from './postpaid/edit-plans/edit-plans.component';
import { AddPlansComponent } from './postpaid/add-plans/add-plans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { AddonComponent } from './addon/addon.component';
import { PopularPlansComponent } from './popular-plans/popular-plans.component';
import { NotificationComponent } from './notification/notification.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddAddonComponent } from './addon/add-addon/add-addon.component';
import { EditAddonComponent } from './addon/edit-addon/edit-addon.component';
import { UseraddonComponent } from './useraddon/useraddon.component';
import { NotifcationComponent } from './notifcation/notifcation.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'adminPostPaid',component:PostpaidComponent},
  { path:'login', component:LoginComponent},
  {path:'adminPrePaid',component:PrepaidComponent},
  { path:'signup',component:SignupComponent},
  { path:'admin_dashboard',component:AdminDashboardComponent},
  {path:'', redirectTo: '/login',pathMatch:'full'} ,
  {path:'adminAddOns',component:AddonComponent},
  {path:'popularplans',component:PopularPlansComponent},
  {path:'notification',component:NotificationComponent},
  {path:'user_dashboard',component:UserDashboardComponent},
  {path:'userAddons',component:UseraddonComponent},
  {path:'notifcation',component:NotifcationComponent},
  {path:'admin-home',component:AdminhomeComponent,canActivate: [AuthGuard]},
  {path:'user-home',component:UserhomeComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
