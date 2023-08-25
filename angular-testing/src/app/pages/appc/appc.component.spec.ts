import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcComponent } from './appc.component';

describe('AppcComponent', () => {
  let component: AppcComponent;
  let fixture: ComponentFixture<AppcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppcComponent]
    });
    fixture = TestBed.createComponent(AppcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
