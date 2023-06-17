import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentgsdecComponent } from './departmentgsdec.component';

describe('DepartmentgsdecComponent', () => {
  let component: DepartmentgsdecComponent;
  let fixture: ComponentFixture<DepartmentgsdecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentgsdecComponent]
    });
    fixture = TestBed.createComponent(DepartmentgsdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
