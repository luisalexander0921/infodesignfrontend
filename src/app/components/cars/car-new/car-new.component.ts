import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CarService } from './../../../services/car.service';
import { SweetalertService } from './../../../services/sweetalert.service';


@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss']
})
export class CarNewComponent {

  formNewCar: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private carService: CarService,
    private sweetalertService: SweetalertService
  ) {
    this.formNewCar = this.formBuilder.group({
      make: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      year: new FormControl(null),
      doors: new FormControl(null)
    });
  }

  ngOnInit() {
  }

  new() {
    if (this.formNewCar.valid) {
      this.carService.new(this.formNewCar.value).subscribe(response => {
        if (response === true) {
          this.sweetalertService.message({
            message: 'Perfecto, registro exitoso!',
            type: 'success'
          });
          this.back();
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

  back() {
    this.router.navigate(['cars/list/']);
  }

}

