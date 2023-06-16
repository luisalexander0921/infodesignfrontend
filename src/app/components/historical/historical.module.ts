import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

import { HistoricalRoutingModule } from './historical-routing.module';
import { ConsumptionBySectionsComponent } from './consumption-by-sections/consumption-by-sections.component';
import { ConsumptionByCustomerComponent } from './consumption-by-customer/consumption-by-customer.component';
import { WorstStagesCustomersComponent } from './worst-stages-customers/worst-stages-customers.component';


@NgModule({
  declarations: [
    ConsumptionBySectionsComponent,
    ConsumptionByCustomerComponent,
    WorstStagesCustomersComponent
  ],
  imports: [
    CommonModule,
    HistoricalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCardModule,
    MatNativeDateModule
  ]
})
export class HistoricalModule { }
