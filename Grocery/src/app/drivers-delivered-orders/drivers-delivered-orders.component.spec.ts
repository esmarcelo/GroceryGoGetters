import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDeliveredOrdersComponent } from './drivers-delivered-orders.component';

describe('DriversDeliveredOrdersComponent', () => {
  let component: DriversDeliveredOrdersComponent;
  let fixture: ComponentFixture<DriversDeliveredOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversDeliveredOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDeliveredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
