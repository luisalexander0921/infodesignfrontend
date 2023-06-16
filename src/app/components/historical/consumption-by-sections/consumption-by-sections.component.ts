import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Constructor } from './../../../../../node_modules/@angular/cdk/schematics/update-tool/migration.d';
import { debounceTime } from 'rxjs/operators';

import { SweetalertService } from './../../../services/sweetalert.service';

import { MatSort } from '@angular/material/sort';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { GetHistoricalService } from 'src/app/services/get-historical.service';

@Component({
  selector: 'app-consumption-by-sections',
  templateUrl: './consumption-by-sections.component.html',
  styleUrls: ['./consumption-by-sections.component.scss']
})
export class ConsumptionBySectionsComponent {
  formSections: FormGroup;

  constructor(
    private router: Router,
    private sweetalertService: SweetalertService,
    private formBuilder: FormBuilder,
    private historicalService: GetHistoricalService,
  ) {     
    this.formSections = this.formBuilder.group({
      type: new FormControl('customer'),
      dateStart: new FormControl('',  Validators.required),
      datefinish: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  getHistorical(){
    if (this.formSections.valid) {
      this.historicalService.listHistorical(this.formSections.value).subscribe(response => {
        if (response.length > 0) {
          this.sweetalertService.message({
            message: 'Perfecto, registros encontrados!',
            type: 'success'
          });
          this.list();
        }
      }, (error) => {
        this.sweetalertService.message({
          type: 'error',
          message: 'Error al realizar la consulta: ' + error.message
        });
      });
    } else {
      this.sweetalertService.message({
        type: 'error',
        message: 'Uno o más campos continen datos invalidos!, por favor revise el formulario.'
      });
    }
  }

  list() {

  }
}
