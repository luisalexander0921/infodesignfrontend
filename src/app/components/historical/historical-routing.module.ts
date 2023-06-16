import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumptionBySectionsComponent } from './consumption-by-sections/consumption-by-sections.component';
import { ConsumptionByCustomerComponent } from './consumption-by-customer/consumption-by-customer.component';
import { WorstStagesCustomersComponent } from './worst-stages-customers/worst-stages-customers.component';

const routes: Routes = [
  {
    path:'consumption-by-section-component', 
    component: ConsumptionBySectionsComponent
  },
  {
    path:'consumption-by-customer', 
    component: ConsumptionByCustomerComponent
  },
  {
    path:'worst-stages-customer',
    component: WorstStagesCustomersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalRoutingModule { }
