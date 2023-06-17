import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentgsComponent } from './departmentgs.component';

describe('DepartmentgsComponent', () => {
  let component: DepartmentgsComponent;
  let fixture: ComponentFixture<DepartmentgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentgsComponent]
    });
    fixture = TestBed.createComponent(DepartmentgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
