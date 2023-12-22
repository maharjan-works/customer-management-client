import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerId: number = 0;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //to get customerId from the current path
    this.customerId = this.activatedRoute.snapshot.params['customerId'];
    //use the customerId in order to get Customer from db
    this.customerService.getCustomerById(this.customerId).subscribe(data =>{
      this.customer = data;
    },
    error => console.log(error));
  }

  saveDetails(){
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe( data =>{
	  console.log(this.customer);
    }, error => console.log(error));
  }
  

}
