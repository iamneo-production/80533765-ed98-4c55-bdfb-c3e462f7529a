import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { AddplanComponent } from './prepaid/addplan/addplan.component';
import { EditplanComponent } from './prepaid/editplan/editplan.component';
import { ShowplanComponent } from './prepaid/showplan/showplan.component';


@NgModule({
  declarations: [
    AppComponent,
    PrepaidComponent,
    AddplanComponent,
    EditplanComponent,
    ShowplanComponent
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
