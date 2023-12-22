import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path:"customer-list", component:CustomerListComponent},
  {path: '', redirectTo: 'customer-list', pathMatch: 'full'},
  {path: 'create-customer',component: CreateCustomerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'update-customer/:customerId', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
