import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AddcustomerComponentComponent } from './addcustomer-component/addcustomer-component.component';
import { ApiSerivce } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponentComponent,

  ],
  imports: [

    BrowserModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [HttpClientModule, ApiSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
