import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class CustomerserviceService {
  constructor(public http: HttpClient) {}

  createEmployee(customer: Object): Observable<Object> {
    return this.http.post<Response>(
      `${environment.backEndUrl}/customer/customer`,
      customer
    );
  }

  // public saveCustomer(customer: Customer): any {
  //   return this.http.post("http://localhost:2001/customer/customer", customer);
  // }

  createOrder(order: any): Observable<any> {
    return this.http.post(
      environment.backEndUrl + "/UnregCust/createOrder",
      order,
      { responseType: "json" }
    );
  }
  getOneOrderdetail(reqno: any): Observable<any> {
    return this.http.get(
      environment.backEndUrl + "/UnregCust/order-list/" + reqno,
      { responseType: "json" }
    );
  }
}
