import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    HomeComponent,
    UpdateCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
