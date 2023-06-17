import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercdecComponent } from './usercdec.component';

describe('UsercdecComponent', () => {
  let component: UsercdecComponent;
  let fixture: ComponentFixture<UsercdecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercdecComponent]
    });
    fixture = TestBed.createComponent(UsercdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
