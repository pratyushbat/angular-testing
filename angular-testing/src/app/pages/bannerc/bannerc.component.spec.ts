import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercComponent } from './bannerc.component';

describe('BannercComponent', () => {
  let component: BannercComponent;
  let fixture: ComponentFixture<BannercComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannercComponent]
    });
    fixture = TestBed.createComponent(BannercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
