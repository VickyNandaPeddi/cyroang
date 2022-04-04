import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    protected dataProviderService: DataProviderService,
    private http: HttpClient,
    private fb: FormBuilder,
    private customerservice: CustomerserviceService
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
    this.onResetForm();
    this.formdata = this.fb.group({
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
  }

  onClickSubmit() {
    alert(this.formdata.value);
    this.customerservice.createOrder(this.formdata.value).subscribe((data) => {
      console.log(data.message);
    });
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
      custName: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      mobile: ["", Validators.required],
      email: ["", Validators.required],
      product: ["", Validators.required],
      model: ["", Validators.required],
      quantity: ["", Validators.required],
      remarks: ["", Validators.required],
      bill_to_addr: ["", Validators.required],
      ship_to_addr: ["", Validators.required],
      gst_no: ["", Validators.required],
      gst_certificate: ["", Validators.required],
      pan_no: ["", Validators.required],
      pan_certificate: ["", Validators.required],
      tan_no: ["", Validators.required],
      accountnumber: ["", Validators.required],
      payee_name: ["", Validators.required],
      ifsc_code: ["", Validators.required],
      branch_code: ["", Validators.required],
      cancelled_cheque: ["", Validators.required],
      tcs_applicable: ["", Validators.required],
      tcs_declaration_form: ["", Validators.required],
      delivery_type: ["", Validators.required],
    });
  }
}
