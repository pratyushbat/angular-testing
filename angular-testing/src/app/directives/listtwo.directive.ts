import { Directive, ElementRef, ViewContainerRef } from '@angular/core';
import { ListBComponent } from '../pages/list-b/list-b.component';

@Directive({
  selector: '[listtwo]',
})
export class ListtwoDirective {
  constructor(
    private elementRef: ElementRef,
    private lstB: ListBComponent,
    private vcref: ViewContainerRef
  ) {
    this.listOperation();
    console.log('ListtwoDirective elementRef', this.elementRef, this.vcref);
  }
  private listOperation() {
    console.log(this.lstB);
    setTimeout(() => (this.lstB.isSel = true), 3000);
  }
}
