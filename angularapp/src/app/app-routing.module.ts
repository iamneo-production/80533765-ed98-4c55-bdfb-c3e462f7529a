import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UseraddonComponent } from './useraddon/useraddon.component';
 


const routes: Routes = [
  {path:'', redirectTo: '/userAddons',pathMatch:'full'} ,
   
  {path:'userAddons',component:UseraddonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
