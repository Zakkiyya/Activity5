import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData : Customer;
  readonly rootURL ="http://localhost:58216/api"

  constructor(private http : HttpClient) { }

  postCustomer(formData:Customer){
    return this.http.post(this.rootURL+'/Customer',formData); 

  }
}
