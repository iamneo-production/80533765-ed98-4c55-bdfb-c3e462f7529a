import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PopularPlansComponent } from './popular-plans/popular-plans.component';
import { RechargeplanComponent } from './popular-plans/rechargeplan/rechargeplan.component';


@NgModule({
  declarations: [
    AppComponent,
    RechargeplanComponent

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
