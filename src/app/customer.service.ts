import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8080/api/v1/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseURL}`, customer);
  }

  getCustomerById(customerId: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${customerId}`);
  }

  updateCustomer(customerId: number, customer: Customer): Observable<Customer>{
    return this.httpClient.put<Customer>(`${this.baseURL}/${customerId}`, customer);
  }


}
