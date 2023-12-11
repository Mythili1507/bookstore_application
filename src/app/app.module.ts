import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AddcustomerComponentComponent } from './addcustomer-component/addcustomer-component.component';
import { ApiSerivce } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponentComponent,
    ViewCustomerComponent


  ],
  imports: [

    BrowserModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule


  ],
  providers: [HttpClientModule, ApiSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
