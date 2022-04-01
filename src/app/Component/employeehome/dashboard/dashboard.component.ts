import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiResponse } from 'src/app/Shared/model/ApiResponse';
import { TrnOrderDetails } from 'src/app/Model/TrnOrderDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trnOrderDet: TrnOrderDetails[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  getorderDetails() {
    // this.messageService.add({ key: 'audit-pdf-toast', severity: 'warning', summary: 'Info', detail: 'Report generation may take time, Report will open in new tab automatically...' });
    // this.dataProviderService.getPdf('summary-report', this.currentAudit).subscribe((response) => {
      // let file = new Blob([response], { type: 'application/pdf' });
      // var fileURL = URL.createObjectURL(file);
      // window.open(fileURL);
    // })

    this.http.get<TrnOrderDetails[]>(`${environment.backEndUrl}/UnregCust/order-list`).subscribe(


      data => {
        this.trnOrderDet = data;
        alert(this.trnOrderDet.length);
      },
      error => {
        console.log(error);
      },
      () => { 
        // this.isLoading = false; 
      }
    
  )
  }

}





