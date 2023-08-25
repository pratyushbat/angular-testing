import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetcComponent } from './greetc.component';

describe('GreetcComponent', () => {
  let component: GreetcComponent;
  let fixture: ComponentFixture<GreetcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetcComponent]
    });
    fixture = TestBed.createComponent(GreetcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
