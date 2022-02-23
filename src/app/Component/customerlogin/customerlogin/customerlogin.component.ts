import { Component, OnInit } from '@angular/core';
import {customer} from "../../../model/customer";
@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {


  public customer:customer | undefined;
  submitted = false;
  // @ts-ignore
  id: number;
  message: string = "";
  validationon: string = "true";

  constructor() { }

  ngOnInit(): void {
    this.customer = new customer();

  }

}
