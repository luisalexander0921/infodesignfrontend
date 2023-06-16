import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
    path: '',
    children: [
      {
        path: 'cars',
        loadChildren: () => import('./components/cars/cars.module').then(m => m.CarsModule),
      }
    ]
  }, */
  {
    path: '',
    children: [
      {
        path: 'historical',
        loadChildren: () => import('./components/historical/historical.module').then(m => m.HistoricalModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
