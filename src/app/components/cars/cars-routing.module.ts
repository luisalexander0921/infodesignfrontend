import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarNewComponent } from './car-new/car-new.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes = [
  {
    path:'new', 
    component: CarNewComponent
  },
  {
    path:'list', 
    component: CarListComponent
  },
  {
    path:'edit/:id', 
    component: CarEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
