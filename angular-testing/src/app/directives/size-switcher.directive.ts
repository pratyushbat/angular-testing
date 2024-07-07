import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sizeSwitcher]',
  exportAs:'sizeSwitcher'
})
export class SizeSwitcherDirective { 

  @Input()
  @HostBinding('class.large')
  isLarge =false;

  constructor() { }

  toggle(){
    this.isLarge=!this.isLarge;
  }

}
