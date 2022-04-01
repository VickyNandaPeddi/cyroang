import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Shared/service/authService';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MstEmployee } from 'src/app/Shared/model/MstEmployee';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/Shared/model/ApiResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  myGroup: FormGroup;
  mstEmployee:MstEmployee;
  redirectURL: string;
  constructor(  protected authService: AuthService,private http: HttpClient,protected router: Router) { 

    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  get f() {
    return this.myGroup.controls;
  }

  ngOnInit(): void {
    this.onResetForm();
  }
  onClickSubmit()
{
  // this.onResetForm();
  // alert("H");
  // alert(this.myGroup.value);
  // alert(JSON.stringify(this.myGroup.value));
  this.mstEmployee=JSON.parse(JSON.stringify(this.myGroup.value));
  let i: number;
		let zeros: string;
		if (this.mstEmployee.empCode.length < 8) {
			zeros = "";
			i = 8 - this.mstEmployee.empCode.length;
			while (i-- > 0) {
				zeros += "0";
			}
			this.mstEmployee.empCode = zeros + this.mstEmployee.empCode;
		}
alert(this.mstEmployee.empCode);

this.http.post<ApiResponse>(`${environment.backEndUrl}/auth/validateUser`, JSON.stringify(this.myGroup.value), this.httpOptions).subscribe(
  data => {
    alert(data);
    if (data.success) {
      // this.messageService.clear();
      // this.messageService.add({ key: 'vendor-admin', severity: 'success', summary: 'Success', detail: data.message });
      alert(data.message);
      this.redirectURL = "/employeehome";
      this.router.navigate([this.redirectURL]);
      // this.buttonDisable = false;
      // this.submitted = false;
      // this.formdata.reset();
    } else {
      // this.messageService.clear();
      // this.messageService.add({ key: 'vendor-admin', severity: 'error', summary: 'Failure!!!', detail: data.message });
      // this.buttonDisable = false;
      alert(data.message);
    }
  },
  error => {
    console.log(error);
  },
  () => { 
    // this.isLoading = false; 
  }

)
  // alert(this.mstEmployee.empCode);
  // this.mstEmployee=
  
  // this.authService.login('00508553','jan@2022','','');
}
  // onSignIn(form: NgForm) {
    // alert("inside form");
		// this.buttonDisable = true;
		// if (form.invalid) {
			// this.buttonDisable = false;
			// this.messageService.clear('sign');
			// this.messageService.add({ key: 'sign', severity: 'error', summary: 'Error', detail: 'Incomplete details provided, Please try again!' });
			// return false;
		// }

		// var encrypt = new JsEncryptModule.JSEncrypt();
		// encrypt.setPublicKey(this.validMagic);
		// this.user.password = encrypt.encrypt(this.user.password);


		// this.authService.login('test', 'test','ca', 'cap').pipe(first())
		// 	.subscribe(
		// 		data => {


					// this.buttonDisable = false;

					// if (this.authService.dashBoardSaName != undefined) {
						// this.redirectURL = "/home/dashboard/sales-area/master-dashboard"
					// } else if (this.authService.dashBoardDoName != undefined) {
						// this.redirectURL = "/home/dashboard/division-office/master-dashboard"
					// }
					// this.router.navigate([this.redirectURL]);


        //   return false;
				// },
				// error => {


					// this.buttonDisable = false;
					// this.messageService.clear('sign');
					// this.messageService.add({ key: 'sign', severity: 'error', summary: 'Sign-in failed', detail: error });
					// this.error = error;


				// 	return false;
				// });
        // return false;
	// }

  onResetForm() {
    this.myGroup = new FormGroup({
     
      'empCode': new FormControl(),
      'password':new FormControl()
  
    });

  }
}
