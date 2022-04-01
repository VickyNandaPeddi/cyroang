import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeloginComponent} from "./Component/employeelogin/employeelogin.component";
import {CustomerloginComponent} from "./Component/customerlogin/customerlogin.component";
import {DefaultComponent} from "./Component/homepage/default/default.component";
import {HistoricalbackgroundComponent} from "./Component/homepage/historicalbackground/historicalbackground.component";
import {InfrastructureComponent} from "./Component/homepage/manufacturingunit/infrastructure/infrastructure.component";
import {EquipmentComponent} from "./Component/homepage/manufacturingunit/equipment/equipment.component";
import {ProductrangeComponent} from "./Component/homepage/manufacturingunit/productrange/productrange.component";
import {TechnicalcapabilitesComponent} from "./Component/homepage/technicalcapabilites/technicalcapabilites.component";
import {RecognitionsApprovalsComponent} from "./Component/homepage/recognitions-approvals/recognitions-approvals.component";
import {ContentComponent} from "./Component/homepage/content/content.component";
import {ContactdetailsComponent} from "./Component/homepage/contactdetails/contactdetails.component";
import {CustomerregisterComponent} from "./Component/customerlogin/customerregister/customerregister.component";
import {QueriesComponent} from "./Component/homepage/queries/queries.component";
import { CreateorderComponent } from './Component/customerlogin/createorder/createorder.component';
import { DashboardComponent } from './Component/employeehome/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: "", component: DefaultComponent
    , children: [

      {
        path: "", component: ContentComponent
      },
      {
        path: "history", component: HistoricalbackgroundComponent
      },
      {
        path: "manufacuringunit",
        children: [
          {
            path: "infrastructure", component: InfrastructureComponent
          },
          {
            path: "equippemnt", component: EquipmentComponent
          },
          {
            path: "productsrange", component: ProductrangeComponent
          }
        ]
      },
      {
        path: "technicalcapabilities", component: TechnicalcapabilitesComponent
      },
      {
        path: "recognitionsapprovals", component: RecognitionsApprovalsComponent
      }
      ,
      {
        path: "contactdetails", component: ContactdetailsComponent
      },
      {
        path: "queries", component: QueriesComponent
      }, {
        path: "createOrder", component: CreateorderComponent, pathMatch: "full"
      }
      //, {
      //   path: "employee", component: EmployeeloginComponent, pathMatch: "full"
      // },
    
      // {
      //   path: "customer", component: CustomerloginComponent, pathMatch: "full"
      // }
      // , {
      //   path: "customerregister", component: CustomerregisterComponent, pathMatch: "full"
      // }
    ]
  },
  // {
  //   path: "contactdetails", component: ContactdetailsComponent
  // }, 
  {
    path: "employee", component: EmployeeloginComponent, pathMatch: "full"
  },

  {
    path: "customer", component: CustomerloginComponent, pathMatch: "full"
  }
  , {
    path: "customerregister", component: CustomerregisterComponent, pathMatch: "full"
  }, {
    path: "employeehome", component: DashboardComponent, pathMatch: "full"
  }
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
