import { Directive, ElementRef } from '@angular/core';
import { ItemComponent } from '../pages/item/item.component';
import { LIST_TYPE } from '../enums/list-type.enum';

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  public value = 'red';

  constructor(private readonly elmRef: ElementRef) {}

  apply(color?: string): void {
    this.value = color || this.value;

    const DOM_ELEMENT = this.elmRef.nativeElement;
    console.log('DOM', DOM_ELEMENT);
    this.elmRef.nativeElement.style.color = this.value;
    this.elmRef.nativeElement.style['font-style'] = 'oblique';
    this.elmRef.nativeElement.style['font-size'] = '60px';
  }
}

@Directive({
  selector: '[listType]',
})
export class ListTypeDirective {
  private value: LIST_TYPE = LIST_TYPE.DASH;

  constructor(private readonly itemCmp: ItemComponent) {}

  apply(type?: LIST_TYPE) {
    this.value = type || this.value;
    this.itemCmp.type = this.value;
  }
}
