import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MstGeneralDropdowns } from 'src/app/Model/MstGeneralDropdowns';
import { MstModel } from 'src/app/Model/MstModel';
import { MstProduct } from 'src/app/Model/MstProduct';
import { MstStateDistrict } from 'src/app/Model/MstStateDistrict';
import { TrnOrderDetails } from 'src/app/Model/TrnOrderDetails';
import { DataProviderService } from 'src/app/Shared/service/dataProvider';
import { environment } from 'src/environments/environment';

import { CustomerserviceService } from './../../../service/customerservice.service';

// import { MessageService } from 'primeng/api';
@Component({
  selector: "app-createorder",
  templateUrl: "./createorder.component.html",
  styleUrls: ["./createorder.component.css"],
})
export class CreateorderComponent implements OnInit {
  buttonDisable: boolean = false;
  formdata: FormGroup;
  mstStateDistrict: MstStateDistrict[];
  mstProduct: MstProduct[];
  mstModel: MstModel[];
  tcsApplicable: MstGeneralDropdowns[];
  deliveryDrops: MstGeneralDropdowns[];
  isLoading: boolean = true;
  submitted: boolean = false;
  type_slno1: String = "1";
  type_slno2: String = "2";
  trnOrderObj: TrnOrderDetails;
  private reqno: string;
  private orderdetails: any;
  isAddMode!: boolean;
  response: any;

  constructor(
    protected dataProviderService: DataProviderService,
    private http: HttpClient,
    private fb: FormBuilder,
    private customerservice: CustomerserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8",
    }),
  };

  get f() {
    return this.formdata.controls;
  }

  ngOnInit() {
    this.reqno = this.route.snapshot.params["reqnbr"];
    this.isAddMode = !this.reqno;
    this.onResetForm();

    this.formdata = this.fb.group({
      reqNo: ["", Validators.required],
      custName: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      mobile: ["", Validators.required],
      email: ["", Validators.required],
      product: ["", Validators.required],
      model: ["", Validators.required],
      quantity: ["", Validators.required],
      remarks: ["", Validators.required],
      billtoaddr: ["", Validators.required],
      shiptoaddr: ["", Validators.required],
      gstno: ["", Validators.required],
      gstcertificate: ["", Validators.required],
      panno: ["", Validators.required],
      pancertificate: ["", Validators.required],
      tanno: ["", Validators.required],
      accountnumber: [""],
      payeename: ["", Validators.required],
      ifsccode: ["", Validators.required],
      branchcode: ["", Validators.required],
      cancelledcheque: ["", Validators.required],
      tcsapplicable: ["", Validators.required],
      tcsdeclarationform: ["", Validators.required],
      deliverytype: ["", Validators.required],
      baseprice: ["", Validators.required],
      expectedeliverydate: ["", Validators.required],
    });

    this.http
      .get<MstStateDistrict[]>(`${environment.backEndUrl}/generic/state-list`)
      .subscribe(
        (data) => {
          this.mstStateDistrict = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );

    this.http
      .get<MstProduct[]>(`${environment.backEndUrl}/generic/product-list`)
      .subscribe(
        (data) => {
          this.mstProduct = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );

    this.http
      .get<MstModel[]>(`${environment.backEndUrl}/generic/model-list`)
      .subscribe(
        (data) => {
          this.mstModel = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );

    this.http
      .get<MstGeneralDropdowns[]>(
        `${environment.backEndUrl}/generic/drops-list/${this.type_slno1}`
      )
      .subscribe(
        (data) => {
          this.tcsApplicable = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );

    this.http
      .get<MstGeneralDropdowns[]>(
        `${environment.backEndUrl}/generic/drops-list/${this.type_slno2}`
      )
      .subscribe(
        (data) => {
          this.deliveryDrops = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );

    if (!this.isAddMode) {
      this.customerservice
        .getOneOrderdetail(this.reqno)

        .subscribe((x) => this.formdata.patchValue(x));
    }
  }

  // getOrderedDetails(orderno: any) {
  //     this.customerservice.getOneOrderdetail(orderno).subscribe((data) => {
  //         this.orderdetails = data;
  //         console.log(this.orderdetails.reqNo);
  //         // this.formdata.setValue(this.orderdetails)
  //         // this.formdata.patchValue({"branchcode": this.orderdetails.branchcode});
  //         // this.formdata.patchValue({"tanno": this.orderdetails.tanno});
  //         // this.formdata.patchValue({"accountnumber": this.orderdetails.accountnumber});
  //         // this.formdata.patchValue({"payeename": this.orderdetails.payeename});
  //         // this.formdata.patchValue({"ifsccode": this.orderdetails.ifsccode});
  //         // // this.formdata.setValue({gstcertificate: [this.orderdetails.gstcertificate]});
  //         // this.formdata.patchValue({"cancelledcheque": this.orderdetails.cancelledcheque});
  //         // this.formdata.patchValue({"ifsccode": this.orderdetails.ifsccode});
  //
  //     });
  // }

  private CreateOrder() {
    // console.log(this.formdata.value);
    this.customerservice.createOrder(this.formdata.value).subscribe((data) => {
      this.response = data.message;
      alert(this.response);
    });
  }

  private UpdateOrder() {
    this.customerservice
      .updateOrder(this.reqno, this.formdata.value)
      .subscribe((data) => {
        this.response = data.message;
        alert(this.response);

        this.router.navigate(["/update/", { reqnbr: this.reqno }]);
      });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.isAddMode) {
      this.CreateOrder();
    } else {
      this.UpdateOrder();
    }
    // this.http.post<ApiResponse>(`${environment.backEndUrl}/UnregCust/createOrder`, JSON.stringify(this.formdata.value), this.httpOptions).subscribe(
    //   data => {
    //     if (data.success) {
    //       // this.messageService.clear();
    //       // this.messageService.add({ key: 'vendor-admin', severity: 'success', summary: 'Success', detail: data.message });
    //       this.buttonDisable = false;
    //       this.submitted = false;
    //       this.formdata.reset();
    //     } else {
    //       // this.messageService.clear();
    //       // this.messageService.add({ key: 'vendor-admin', severity: 'error', summary: 'Failure!!!', detail: data.message });
    //       this.buttonDisable = false;
    //     }
    //   },
    //   error => {
    //     // this.messageService.add({ key: 'vendor-admin', severity: 'error', summary: 'Error occurred', detail: 'Error Occurred, please make sure that all fields are filled properly.' });
    //     this.buttonDisable = false;
    //   }
    // );

    // this.http
    //   .post<ApiResponse>(
    //     `${environment.backEndUrl}/UnregCust/createOrder`,
    //     this.formdata.value,
    //     this.httpOptions
    //   )
    //   .subscribe(
    //     (data) => {
    //       if (data.success) {
    //         // this.messageService.clear();
    //         // this.messageService.add({ key: 'vendor-admin', severity: 'success', summary: 'Success', detail: data.message });
    //         alert(data.message);
    //         this.buttonDisable = false;
    //         this.submitted = false;
    //         this.formdata.reset();
    //       } else {
    //         // this.messageService.clear();
    //         // this.messageService.add({ key: 'vendor-admin', severity: 'error', summary: 'Failure!!!', detail: data.message });
    //         this.buttonDisable = false;
    //         alert(data.message);
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       this.isLoading = false;
    //     }
    //   );
  }

  onResetForm() {
    this.formdata = this.fb.group({
      reqNo: ["", Validators.required],
      custName: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      mobile: ["", Validators.required],
      email: ["", Validators.required],
      product: ["", Validators.required],
      model: ["", Validators.required],
      quantity: ["", Validators.required],
      remarks: ["", Validators.required],
      billtoaddr: ["", Validators.required],
      shiptoaddr: ["", Validators.required],
      gstno: ["", Validators.required],
      gstcertificate: ["", Validators.required],
      panno: ["", Validators.required],
      pancertificate: ["", Validators.required],
      tanno: ["", Validators.required],
      accountnumber: [""],
      payeename: ["", Validators.required],
      ifsccode: ["", Validators.required],
      branchcode: ["", Validators.required],
      cancelledcheque: ["", Validators.required],
      tcsapplicable: ["", Validators.required],
      tcsdeclarationform: ["", Validators.required],
      deliverytype: ["", Validators.required],
      baseprice: ["", Validators.required],
      expectedeliverydate: ["", Validators.required],
    });
  }
}
