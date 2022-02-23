import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../Model/Customer";
import {CustomerserviceService} from "../../../service/customerservice.service";

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  // @ts-ignore
  customer: Customer;

  constructor(public  customerService: CustomerserviceService) {
  }

  ngOnInit(): void {

  }

  // saveCustomer(customer: any) {
  //   console.log(customer);
  // }
}
