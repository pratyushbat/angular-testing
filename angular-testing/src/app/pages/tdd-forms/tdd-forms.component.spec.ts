import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddFormsComponent } from './tdd-forms.component';

describe('TddFormsComponent', () => {
  let component: TddFormsComponent;
  let fixture: ComponentFixture<TddFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TddFormsComponent]
    });
    fixture = TestBed.createComponent(TddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
