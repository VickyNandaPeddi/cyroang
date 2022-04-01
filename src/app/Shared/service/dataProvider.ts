import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MstStateDistrict } from 'src/app/Model/MstStateDistrict';

@Injectable({
    providedIn: 'root',
  })


export class DataProviderService{
    constructor(private http: HttpClient) {

	}

    loadStateMaster():  Observable<MstStateDistrict[]>{

		return this.http.get<MstStateDistrict[]>(`${environment.backEndUrl}/generic/state-list`);

        // return [
        //     {
        //    state_code: 'Ng01',
        //    state_name : 'India',
        //    sl_no:1,
        //    district_code:'sist',
        //    district_name:'dist'

        //   }
        //   ];
	}
}
