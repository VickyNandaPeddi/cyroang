import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    empCode: number;
	empName: string;
	designation: string;
    constructor(private http: HttpClient, private router: Router) {
		// this.accessTokenSubject = new BehaviorSubject<string>(localStorage.getItem('accessToken'));
		// this.accessTokenSubject = new BehaviorSubject<string>(this.accessToken);

		// this.accessToken = this.accessTokenSubject.asObservable();
	}

    login(username: string, password: string, secret: string, captchaAnswer: string) {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
		};

		let i: number;
		let zeros: string;
		if (username.length < 8) {
			zeros = "";
			i = 8 - username.length;
			while (i-- > 0) {
				zeros += "0";
			}
			username = zeros + username;
		}
alert(username);
		return this.http.post<ApiResponse>(`${environment.backEndUrl}/auth/validateUser`,'{ "empCode": "' + username + '" } ', httpOptions)
			.pipe(map(user => {
                alert(user);
				// login successful if there's a jwt token in the response
				// if (user && user.accessToken) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					// this.accessToken = user.accessToken;
					// this.empCode = user.empCode;
					// this.empName = user.empName;
					// this.accessTokenSubject.next(user);
					// this.designation = user.designation;
					// this.employeeDhruvaRODatas = user.roList;
					// this.archetypeWiseSpotCheckModuleNumbers = user.archetypeWiseSpotCheckModuleNumber;
					// this.spotcheckQuestions = user.spotcheckQuestions;
					// this.dashBoardSoName = user.soName;
					// this.dashBoardDoName = user.doName;
					// this.dashBoardSaName = user.saName;
					// this.userLevel = user.userLevel;
					// this.locInFlag = user.locInFlag;
					// // this.maxAuditCount = user.maxAuditCount;
					// this.sessionId = user.sessionId;
					// this.isDevelopment = user.development;
					// this.isProduction = user.production;
					// this.isCOISLogin = false;
					// this.welcomeMessage = user.welcomeMessage;
					// localStorage.setItem('accessToken', user.accessToken);
					// localStorage.setItem("empCode", user.empCode);
					// localStorage.setItem("empName", user.empName);
					// localStorage.setItem("designation", user.designation);
				// }
				return user;
			}));
	}
}