import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcuserComponent } from './ngcuser.component';

describe('NgcuserComponent', () => {
  let component: NgcuserComponent;
  let fixture: ComponentFixture<NgcuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcuserComponent]
    });
    fixture = TestBed.createComponent(NgcuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
