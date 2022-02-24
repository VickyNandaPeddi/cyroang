import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(public http: HttpClient) {
  }

  createEmployee(customer: Object): Observable<Object> {
    return this.http.post("http://localhost:2001/customer/customer", customer);
  }

  // public saveCustomer(customer: Customer): any {
  //   return this.http.post("http://localhost:2001/customer/customer", customer);
  // }
}
