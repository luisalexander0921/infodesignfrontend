import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionByCustomerComponent } from './consumption-by-customer.component';

describe('ConsumptionByCustomerComponent', () => {
  let component: ConsumptionByCustomerComponent;
  let fixture: ComponentFixture<ConsumptionByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionByCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
