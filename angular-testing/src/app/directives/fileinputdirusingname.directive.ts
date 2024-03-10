import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ListtempComponent } from '../pages/listtemp/listtemp.component';

@Directive({ selector: '[appFileinputdirusingname]' })
export class FileinputdirusingnameDirective implements OnInit {
  private mime!: string;
  private allowedSize: string | number = 0;

  @Input()
  set fileInput(mimeorTuple: [string, number] | string) {
    if (Array.isArray(mimeorTuple) && mimeorTuple.length === 2) {
      this.mime = mimeorTuple[0];
      this.allowedSize = mimeorTuple[1];
    } else if (typeof mimeorTuple === 'string' && mimeorTuple?.trim().length)
      this.mime = mimeorTuple;
  }

  inputRef!: HTMLInputElement;
  value?: File;
  fileName?: string;
  fileUrl?: string;
  isImage: boolean = false;

  constructor(private elemRef: ElementRef, public vcref: ViewContainerRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  ngOnInit(): void {
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

    console.log(this, this.mime, this.allowedSize);
  }

  converToUrl(file: File) {
    return new Promise<string>((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        console.log(fr.result);
        resolve(fr.result as string);
      };
    });
  }
}
