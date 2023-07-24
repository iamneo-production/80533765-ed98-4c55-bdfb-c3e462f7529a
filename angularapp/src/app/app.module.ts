import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { ShowPlansComponent } from './postpaid/show-plans/show-plans.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPlansComponent } from './postpaid/add-plans/add-plans.component';
import { EditPlansComponent } from './postpaid/edit-plans/edit-plans.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { AddplanComponent } from './prepaid/addplan/addplan.component';
import { EditplanComponent } from './prepaid/editplan/editplan.component';
import { ShowplanComponent } from './prepaid/showplan/showplan.component';
import { AddonComponent } from './addon/addon.component';
import { AddAddonComponent } from './addon/add-addon/add-addon.component';
import { EditAddonComponent } from './addon/edit-addon/edit-addon.component';
import { ShowAddonComponent } from './addon/show-addon/show-addon.component';
import { PopularPlansComponent } from './popular-plans/popular-plans.component';
import { NotificationComponent } from './notification/notification.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UseraddonComponent } from './useraddon/useraddon.component';
import { NotifcationComponent } from './notifcation/notifcation.component';
import { RechargeaddonComponent } from './useraddon/rechargeaddon/rechargeaddon.component';
import { RechargeplanComponent } from './popular-plans/rechargeplan/rechargeplan.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';


@NgModule({
  declarations: [
    AppComponent,
    PostpaidComponent,
    ShowPlansComponent,
    AddPlansComponent,
    EditPlansComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    PrepaidComponent,
    AddplanComponent,
    EditplanComponent,
    ShowplanComponent,
    AddonComponent,
    AddAddonComponent,
    EditAddonComponent,
    ShowAddonComponent,
    PopularPlansComponent,
    NotificationComponent,
    UserDashboardComponent,
    UseraddonComponent,
    NotifcationComponent,
    RechargeaddonComponent,
    RechargeplanComponent,
    AdminhomeComponent,
    UserhomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
