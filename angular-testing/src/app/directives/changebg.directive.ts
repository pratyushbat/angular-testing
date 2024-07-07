import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangebg]',
   exportAs: 'changecolor'
})
export class ChangebgDirective {
  constructor(private el: ElementRef) {
 
  }
  @Input() color:any;
  @HostListener("mouseover") applyColor() {
    this.changeColor(this.color);
  }
 
  @HostListener("mouseleave") removeColor() {
    this.changeColor(null);
  }
  changeColor(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
