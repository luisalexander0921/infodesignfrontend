import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CarService } from './../../../services/car.service';
import { SweetalertService } from './../../../services/sweetalert.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent {
  formEditCar: FormGroup;
  car: any;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private sweetalertService: SweetalertService,
    private router: Router
  ) {
    this.formEditCar = this.formBuilder.group({
      make: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      year: new FormControl(null),
      doors: new FormControl(null)
    });

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.show(this.id);
  }

  ngOnInit() {
  }

  show(id: number) {
    this.sweetalertService.loading('Cargando información!', 'Por favor espere un momento.');
    this.carService.show(id).subscribe(response => {
      if (response != null) {
        this.car = response;
        this.formEditCar.patchValue({
          make: this.car.make,
          model: this.car.model,
          color: this.car.color,
          year: this.car.year,
          doors: this.car.doors
        });
        this.sweetalertService.close();
      }
    }, (error) => {
      this.sweetalertService.message({
        type: 'error',
        message: 'Error al realizar la consulta, ' + error.message
      });
    });
  }

  edit() {
    this.sweetalertService.loading('Registrando información!', 'Por favor espere un momento.');
    if (this.formEditCar.valid) {
      this.formEditCar.value.id = this.id;
      this.carService.edit(this.formEditCar.value).subscribe(response => {
        this.sweetalertService.message({
          message: 'Perfecto, registro exitoso!',
          type: 'success'
        });
        this.back();
      }, (error) => {
        this.sweetalertService.message({
          type: 'error',
          message: 'Error al realizar la consulta: ' + error.message
        });
      });
    }
    else {
      this.sweetalertService.message({
        type: 'error',
        message: 'Uno o más campos continen datos invalidos!, por favor revise el formulario.'
      });
    }
  }

  back() {
    this.router.navigate(['cars/list']);
  }

}


