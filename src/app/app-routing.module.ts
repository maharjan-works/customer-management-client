import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  {path:"customers", component:CustomerListComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'create-customer',component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
