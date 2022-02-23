import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../Model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(public http: HttpClient) {
  }

  public saveCustomer(customer: Customer): any {
    return this.http.post("http://localhost:1001/customer/customer", customer);
  }
}
