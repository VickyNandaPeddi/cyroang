import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateorderComponent } from './Component/customerlogin/createorder/createorder.component';
import { CustomerloginComponent } from './Component/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './Component/customerlogin/customerregister/customerregister.component';
import { DashboardComponent } from './Component/employeehome/dashboard/dashboard.component';
import { EmployeeloginComponent } from './Component/employeelogin/employeelogin.component';
import { ContactdetailsComponent } from './Component/homepage/contactdetails/contactdetails.component';
import { ContentComponent } from './Component/homepage/content/content.component';
import { DefaultComponent } from './Component/homepage/default/default.component';
import { HistoricalbackgroundComponent } from './Component/homepage/historicalbackground/historicalbackground.component';
import { EquipmentComponent } from './Component/homepage/manufacturingunit/equipment/equipment.component';
import { InfrastructureComponent } from './Component/homepage/manufacturingunit/infrastructure/infrastructure.component';
import { ProductrangeComponent } from './Component/homepage/manufacturingunit/productrange/productrange.component';
import { QueriesComponent } from './Component/homepage/queries/queries.component';
import {
  RecognitionsApprovalsComponent,
} from './Component/homepage/recognitions-approvals/recognitions-approvals.component';
import { TechnicalcapabilitesComponent } from './Component/homepage/technicalcapabilites/technicalcapabilites.component';

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
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    NgxUsefulSwiperModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    ReactiveFormsModule,
    MessageModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
