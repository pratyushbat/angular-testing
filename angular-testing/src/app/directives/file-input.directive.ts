import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ListtempComponent } from '../pages/listtemp/listtemp.component';

// @Directive({selector:"input"})
// @Directive({selector:"[type]"})
// @Directive({selector:"[type=file]"})
// @Directive({selector:".form-c"})
// @Directive({selector:"input:not(.form-c)"})
// @Directive({selector:"[type=text]"})
// AND
// @Directive({    selector:"input.form-c[type=file]"})
// or
// @Directive({    selector:"input[type=file],.form-c"})
@Directive({ selector: '[fileInput]' })
export class FileInputDirective {
  constructor(private elemRef: ElementRef, public vcref: ViewContainerRef) {
    console.log(
      'File Input Directive Applied on input tag',
      elemRef.nativeElement
    );
    console.log(vcref);
  }
}
