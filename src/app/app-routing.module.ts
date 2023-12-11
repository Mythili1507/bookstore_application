import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddcustomerComponentComponent } from './addcustomer-component/addcustomer-component.component';


const routes: Routes = [
  { path: 'customers/:customerId', component: ViewCustomerComponent },
  { path: 'customers', component: AddcustomerComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
