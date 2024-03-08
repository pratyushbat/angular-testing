import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[list]',
})
export class ListDirective {
  constructor(
    private elementRef: ElementRef,
    private tref: TemplateRef<any>,
    private vcref: ViewContainerRef
  ) {
    console.log('ok', this.elementRef.nativeElement);
    // this.listOperation();
    console.log(
      'ldref for ng template only',
      this.elementRef.nativeElement,
      this.tref,
      this.vcref
    );
    // console.log('ldref', this.vcref);
    this.listOpertaionNgTemp();
  }

  // private listOperation() {
  //   const ul = this.elementRef.nativeElement as HTMLUListElement;
  //   ul.classList.add('custom-list');
  //   ul.addEventListener('click', () => {
  //     alert('list clicked');
  //   });
  // }

  listOpertaionNgTemp() {
    this.vcref.createEmbeddedView(this.tref);
  }
}
