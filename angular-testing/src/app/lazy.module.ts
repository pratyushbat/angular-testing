import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LazyParentComponent,
    LazyChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'load-me',component:LazyParentComponent}
    ])
  ]
})
export class LazyModule { }
