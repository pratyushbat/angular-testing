import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdirecitiveComponent } from './appdirecitive.component';

describe('AppdirecitiveComponent', () => {
  let component: AppdirecitiveComponent;
  let fixture: ComponentFixture<AppdirecitiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppdirecitiveComponent]
    });
    fixture = TestBed.createComponent(AppdirecitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
