import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListOneComponent } from './app-list-one.component';

describe('AppListOneComponent', () => {
  let component: AppListOneComponent;
  let fixture: ComponentFixture<AppListOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppListOneComponent]
    });
    fixture = TestBed.createComponent(AppListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
