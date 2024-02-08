import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostasyncComponent } from './postasync.component';

describe('PostasyncComponent', () => {
  let component: PostasyncComponent;
  let fixture: ComponentFixture<PostasyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostasyncComponent]
    });
    fixture = TestBed.createComponent(PostasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
