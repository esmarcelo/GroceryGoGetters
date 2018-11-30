import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOrdersListComponent } from './driver-orders-list.component';

describe('DriverOrdersListComponent', () => {
  let component: DriverOrdersListComponent;
  let fixture: ComponentFixture<DriverOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
