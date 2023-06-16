import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstStagesCustomersComponent } from './worst-stages-customers.component';

describe('WorstStagesCustomersComponent', () => {
  let component: WorstStagesCustomersComponent;
  let fixture: ComponentFixture<WorstStagesCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorstStagesCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorstStagesCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
