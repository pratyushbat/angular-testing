import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  let component: LazyChildComponent;
  let fixture: ComponentFixture<LazyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyChildComponent]
    });
    fixture = TestBed.createComponent(LazyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
