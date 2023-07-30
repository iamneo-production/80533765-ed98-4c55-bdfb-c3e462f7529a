import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddonComponent } from './addon/addon.component';
import { AddAddonComponent } from './addon/add-addon/add-addon.component';
import { EditAddonComponent } from './addon/edit-addon/edit-addon.component';
import { ShowAddonComponent } from './addon/show-addon/show-addon.component';


@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    AddAddonComponent,
    EditAddonComponent,
    ShowAddonComponent
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
