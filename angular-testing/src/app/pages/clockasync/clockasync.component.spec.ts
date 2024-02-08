import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockasyncComponent } from './clockasync.component';

describe('ClockasyncComponent', () => {
  let component: ClockasyncComponent;
  let fixture: ComponentFixture<ClockasyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockasyncComponent]
    });
    fixture = TestBed.createComponent(ClockasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
