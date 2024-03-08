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
  inputRef!: HTMLInputElement;
  value?: File;
  fileName?: string;
  fileUrl?: string;
  isImage: boolean = false;
  constructor(private elemRef: ElementRef, public vcref: ViewContainerRef) {
    this.inputRef = this.elemRef.nativeElement;
    console.log(
      'File Input Directive Applied on input tag',
      this.inputRef,
      this.vcref
    );
    this.inputRef.addEventListener('change', () => {
      this.onFileInputChange();
    });
  }

  private async onFileInputChange() {
    const file = this.inputRef.files?.item(0);
    console.log(file);
    if (!file) return;
    this.value = file;
    this.fileName = file.name;
    this.isImage = !!file.type.match(/image(\/jpe?g | png | bmp | gif)?/);
    this.fileUrl = this.isImage ? await this.converToUrl(file) : undefined;
    console.log(this);
  }
  converToUrl(file: File) {
    return new Promise<string>((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => resolve(fr.result as string);
    });
  }
}
