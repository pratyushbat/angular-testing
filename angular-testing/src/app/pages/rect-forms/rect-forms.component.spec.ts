import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectFormsComponent } from './rect-forms.component';

describe('RectFormsComponent', () => {
  let component: RectFormsComponent;
  let fixture: ComponentFixture<RectFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectFormsComponent]
    });
    fixture = TestBed.createComponent(RectFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
