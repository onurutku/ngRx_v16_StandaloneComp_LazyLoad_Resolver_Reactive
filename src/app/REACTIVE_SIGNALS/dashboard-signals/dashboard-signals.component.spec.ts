import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSignalsComponent } from './dashboard-signals.component';

describe('DashboardSignalsComponent', () => {
  let component: DashboardSignalsComponent;
  let fixture: ComponentFixture<DashboardSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSignalsComponent]
    });
    fixture = TestBed.createComponent(DashboardSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
