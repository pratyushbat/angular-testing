import { Directive, ElementRef } from "@angular/core";
@Directive({
    selector: "[imgPreview]",
  })
export class ImgPreviewDirective {
    constructor(public readonly elemRef: ElementRef) { }
  }