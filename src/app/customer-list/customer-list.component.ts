import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer_list: Customer[] = [];
  message: Object ='';

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  private getCustomerList(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customer_list = data;
    });
  }

  updateCustomer(customerId: number){
    this.router.navigate([`update-customer`,customerId]);
  }

  deleteCustomeer(customerId: number){
    this.customerService.deleteCustomer(customerId).subscribe(data =>{
      this.message = "the record deleted succesfully";
      console.log(data);
      this.getCustomerList();
    })
  }

  viewCustomer(customerId: number){
    this.router.navigate([`view-customer`,customerId]);
  }

}
