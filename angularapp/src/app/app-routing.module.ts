import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonComponent } from './addon/addon.component';
import { AddAddonComponent } from './addon/add-addon/add-addon.component';
import { EditAddonComponent } from './addon/edit-addon/edit-addon.component';


const routes: Routes = [
  {path:'', redirectTo: '/adminAddOns',pathMatch:'full'} ,
  {path:'adminAddOns',component:AddonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
