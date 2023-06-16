import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionBySectionsComponent } from './consumption-by-sections.component';

describe('ConsumptionBySectionsComponent', () => {
  let component: ConsumptionBySectionsComponent;
  let fixture: ComponentFixture<ConsumptionBySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionBySectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionBySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
