import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeloginComponent} from './Component/employeelogin/employeelogin.component';
import {CustomerloginComponent} from './Component/customerlogin/customerlogin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DefaultComponent} from './Component/homepage/default/default.component';
import {HistoricalbackgroundComponent} from './Component/homepage/historicalbackground/historicalbackground.component';
import {InfrastructureComponent} from './Component/homepage/manufacturingunit/infrastructure/infrastructure.component';
import {EquipmentComponent} from './Component/homepage/manufacturingunit/equipment/equipment.component';
import {ProductrangeComponent} from './Component/homepage/manufacturingunit/productrange/productrange.component';
import {RecognitionsApprovalsComponent} from './Component/homepage/recognitions-approvals/recognitions-approvals.component';
import {ContentComponent} from './Component/homepage/content/content.component';
import {TechnicalcapabilitesComponent} from './Component/homepage/technicalcapabilites/technicalcapabilites.component';
import {ContactdetailsComponent} from './Component/homepage/contactdetails/contactdetails.component';
import {CustomerregisterComponent} from './Component/customerlogin/customerregister/customerregister.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {QueriesComponent} from './Component/homepage/queries/queries.component';
// @ts-ignore
import {HttpClientModule} from '@angular/common/http';


import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CreateorderComponent} from './Component/customerlogin/createorder/createorder.component';
import {DashboardComponent} from './Component/employeehome/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeloginComponent,
    CustomerloginComponent,
    DefaultComponent,
    HistoricalbackgroundComponent,
    InfrastructureComponent,
    EquipmentComponent,
    ProductrangeComponent,
    RecognitionsApprovalsComponent,
    ContentComponent,
    TechnicalcapabilitesComponent,
    ContactdetailsComponent,
    CustomerregisterComponent,
    QueriesComponent,

    CreateorderComponent,
       DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FlexLayoutModule,NgbModule,NgxUsefulSwiperModule, FormsModule,HttpClientModule, MessagesModule,
    MessageModule,
    ToastModule,	BrowserAnimationsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
