import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../Model/Customer";

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  // @ts-ignore
  customer:Customer;
  constructor() { }

  ngOnInit(): void {

  }

}
