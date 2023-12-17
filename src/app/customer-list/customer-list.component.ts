import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      {
          "customerId": 101,
          "firstName": "joe",
          "lastName": "biden",
          "email": "joe.biden@gmail.com"
      },
      {
          "customerId": 102,
          "firstName": "kamala",
          "lastName": "harris",
          "email": "kamala@gmail.com"
      }
  ];
  }

}
