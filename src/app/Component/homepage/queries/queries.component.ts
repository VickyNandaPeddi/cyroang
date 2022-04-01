import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../Model/Customer";
import {CustomerserviceService} from "../../../service/customerservice.service";

import { MessageService } from 'primeng/api';


@Component({
  // selector: 'app-display',
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css'],providers: [MessageService],
})
export class QueriesComponent implements OnInit {


  // content : string = "Hello World";

// @ts-ignore
customer: Customer = new Customer();
submitted = false;
showMsg: boolean = false;

constructor(public  customerService: CustomerserviceService,private messageService: MessageService) {
}

ngOnInit(): void {
  // this.customer.application = ["Veterniary", "IVF Hospital", "Industry", "Research", "Reseller"]
  //   , this.customer.model = ["BA-3", "TA-55", "BA-35"]
  //   , this.customer.info = ["Product Catogery", "Price List", "Quatation"]
}

newCustomer(): void {
  this.submitted = false;

}

save() {
  // @ts-ignore
  // @ts-ignore
  // console.log(this.customer);
  this.customerService.createEmployee(this.customer).subscribe(data => {
      console.log(data);
      console.log(data.message);
      // @ts-ignore
      this.customer = new Customer();
      this.messageService.add({
        // title: 'Success!', 
        // content: 'Your message has been sent successfully.',
        //  cssClass: 'e-toast-success',
          icon: 'e-success toast-icons' ,
        key: 'vendor-admin',
        // severity: '',
        summary: data.message,
        // detail: '',
    });

    },
    // @ts-ignore
    error => console.log(error));
}

onSubmit() {
  console.log(this.customer);
  this.submitted = true;
  this.showMsg = true;
  this.save();
}

}

