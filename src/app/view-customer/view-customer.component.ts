import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerId: number = 0;
  customer: Customer = new Customer();

  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params['customerId'];
    console.log("Customer Id: "+ this.customerId);
    this.customerService.getCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

}
