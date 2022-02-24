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
  customer: Customer = new Customer();
  submitted = false;
  showMsg: boolean = false;

  constructor(public  customerService: CustomerserviceService) {
  }

  ngOnInit(): void {
    this.customer.applicationuse = ["Veterniary", "IVF Hospital", "Industry", "Research", "Reseller"]
      , this.customer.modelselection = ["BA-3", "TA-55", "BA-35"]
      , this.customer.inforequired = ["Product Catogery", "Price List", "Quatation"]
  }

  newCustomer(): void {
    this.submitted = false;

  }

  save() {
    // @ts-ignore
    // @ts-ignore
    this.customerService.createEmployee(this.customer).subscribe(data => {
        console.log(data)
        // @ts-ignore
        this.customer = new Customer();

      },
      // @ts-ignore
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.showMsg = true;
    this.save();
  }

  // onSubmit(registerForm: any) {
  //   console.log(registerForm.value)
  //   this.customerService.createEmployee(registerForm);
  //   // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //
  // }
}
