import { SweetalertService } from './../../../services/sweetalert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';

import { CarService } from './../../../services/car.service';
import { Constructor } from './../../../../../node_modules/@angular/cdk/schematics/update-tool/migration.d';

import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  displayedColumns: string[] = ['make', 'model', 'color', 'year', 'doors', 'actions'];
  dataSource: any;



  // MatPaginator Inputs
  length: any;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  setPageSizeOptions(setPageSizeOptionsInput: string) {

    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private carService: CarService,
    private sweetalertService: SweetalertService
  ) {
    //this.paginator = this.dataSource.paginator
    //this.sort = new MatSort;
  }


  ngOnInit() {
    this.list();
  }

  list() {
    this.sweetalertService.loading('Cargando información!', 'Por favor espere un momento.');
    this.carService.list().subscribe(response => {

      if (response.length > 0) {
        this.length = response.length;
        this.dataSource = new MatTableDataSource<any>(response);
        this.sweetalertService.close();
      } else {
        this.sweetalertService.message({
          type: 'alert',
          message: 'No hay datos para listar'
        });
      }
    }, (error) => {
      this.sweetalertService.message({
        type: 'error',
        message: 'Error al realizar la consulta: ' + error.message
      });
    });
  }

  new() {
    this.router.navigate(['cars/new/']);
  }

  show(id: any) {
    console.log("id show::", id);

    
    this.router.navigate(['cars/show/' + id]);

  }

  edit(id: any) {
    this.router.navigate(['cars/edit/' + id]);
  }

  delete(id: any) {
    this.carService.delete(id).subscribe(response => {
      this.sweetalertService.message({
        message: 'Registro eliminado exitosamente!',
        type: 'success'
      });
      this.list();
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}