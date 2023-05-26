import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRxjsComponent } from './dashboard-rxjs.component';

describe('DashboardRxjsComponent', () => {
  let component: DashboardRxjsComponent;
  let fixture: ComponentFixture<DashboardRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRxjsComponent]
    });
    fixture = TestBed.createComponent(DashboardRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
