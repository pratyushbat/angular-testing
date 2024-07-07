import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfuckounterComponent } from './counterfuckounter.component';

describe('CounterfuckounterComponent', () => {
  let component: CounterfuckounterComponent;
  let fixture: ComponentFixture<CounterfuckounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterfuckounterComponent]
    });
    fixture = TestBed.createComponent(CounterfuckounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
