import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CustomerserviceService } from './../../../service/customerservice.service';

@Component({
  selector: "app-orderdata",
  templateUrl: "./orderdata.component.html",
  styleUrls: ["./orderdata.component.css"],
})
export class OrderdataComponent implements OnInit {
  reqno: any;
  orderdetails: any;
  constructor(
    private route: ActivatedRoute,
    private customerservice: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("reqnbr");
      this.reqno = id;
      // alert(this.reqno);
      this.getOrderedDetails(this.reqno);
    });
  }

  getOrderedDetails(orderno: any) {
    this.customerservice.getOneOrderdetail(orderno).subscribe((data) => {
      this.orderdetails = data;

      console.log(data);
    });
  }
}
