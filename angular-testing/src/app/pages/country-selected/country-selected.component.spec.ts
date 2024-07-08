import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectedComponent } from './country-selected.component';

describe('CountrySelectedComponent', () => {
  let component: CountrySelectedComponent;
  let fixture: ComponentFixture<CountrySelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySelectedComponent]
    });
    fixture = TestBed.createComponent(CountrySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
