import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MstStateDistrict } from 'src/app/Model/MstStateDistrict';
import { DataProviderService } from 'src/app/Shared/service/dataProvider';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MstProduct } from 'src/app/Model/MstProduct';
import { MstModel } from 'src/app/Model/MstModel';
import { MstGeneralDropdowns } from 'src/app/Model/MstGeneralDropdowns';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TrnOrderDetails } from 'src/app/Model/TrnOrderDetails';
// import { MessageService } from 'primeng/api';
import { ApiResponse } from 'src/app/Shared/model/ApiResponse';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})




export class CreateorderComponent implements OnInit {
  buttonDisable: boolean = false;
  formdata: FormGroup;
  mstStateDistrict: MstStateDistrict[];
  mstProduct:MstProduct[];
  mstModel:MstModel[];
  tcsApplicable:MstGeneralDropdowns[];
  deliveryDrops:MstGeneralDropdowns[];
  isLoading: boolean = true;
  submitted: boolean = false;
  type_slno1:String="1";
  type_slno2:String="2";
  trnOrderObj:TrnOrderDetails;
  constructor(protected dataProviderService: DataProviderService,private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };

  get f() {
    return this.formdata.controls;
  }
  ngOnInit() {
    this.onResetForm();
this.http.get<MstStateDistrict[]>(`${environment.backEndUrl}/generic/state-list`).subscribe(


    data => {
      this.mstStateDistrict = data;
    },
    error => {
      console.log(error);
    },
    () => { this.isLoading = false; }
  
)

this.http.get<MstProduct[]>(`${environment.backEndUrl}/generic/product-list`).subscribe(
 

    data => {
      this.mstProduct = data;
    },
    error => {
      console.log(error);
    },
    () => { this.isLoading = false; }
  
)

this.http.get<MstModel[]>(`${environment.backEndUrl}/generic/model-list`).subscribe(


  data => {
    this.mstModel = data;
  },
  error => {
    console.log(error);
  },
  () => { this.isLoading = false; }

)

this.http.get<MstGeneralDropdowns[]>(`${environment.backEndUrl}/generic/drops-list/${this.type_slno1}`).subscribe(


  data => {
    this.tcsApplicable = data;
  },
  error => {
    console.log(error);
  },
  () => { this.isLoading = false; }

)

this.http.get<MstGeneralDropdowns[]>(`${environment.backEndUrl}/generic/drops-list/${this.type_slno2}`).subscribe(


  data => {
    this.deliveryDrops = data;
  },
  error => {
    console.log(error);
  },
  () => { this.isLoading = false; }

)
    
  }
  
  onClickSubmit() {
    alert(this.formdata);
   alert(JSON.stringify(this.formdata.value));

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

      this.http.post<ApiResponse>(`${environment.backEndUrl}/UnregCust/createOrder`, JSON.stringify(this.formdata.value), this.httpOptions).subscribe(


        data => {
          if (data.success) {
            // this.messageService.clear();
            // this.messageService.add({ key: 'vendor-admin', severity: 'success', summary: 'Success', detail: data.message });
            alert(data.message);
            this.buttonDisable = false;
            this.submitted = false;
            this.formdata.reset();
          } else {
            // this.messageService.clear();
            // this.messageService.add({ key: 'vendor-admin', severity: 'error', summary: 'Failure!!!', detail: data.message });
            this.buttonDisable = false;
            alert(data.message);
          }
        },
        error => {
          console.log(error);
        },
        () => { this.isLoading = false; }
      
      )
   
  }
  onResetForm() {
    this.formdata = new FormGroup({
     
      'custName': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      
    });

  }

}


