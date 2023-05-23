import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNgrxComponent } from './dashboard-ngrx.component';

describe('DashboardComponent', () => {
  let component: DashboardNgrxComponent;
  let fixture: ComponentFixture<DashboardNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardNgrxComponent],
    });
    fixture = TestBed.createComponent(DashboardNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
