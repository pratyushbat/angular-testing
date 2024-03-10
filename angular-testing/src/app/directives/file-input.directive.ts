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
@Directive({ selector: '[fileInput]' })
export class FileInputDirective implements OnInit {
  private _mime: string[] = [];
  @Input()
  set mime(valueOrlist: string | string[]) {
    this._mime = Array.isArray(valueOrlist) ? valueOrlist : [valueOrlist];
  }

  @Input('size')
  allowedSize: string | number = 0;

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
    if (!file) return;
    this.value = file;
    const validationRes = this.validateFile(file);
    console.log(validationRes);
    if (!validationRes.isValid) {
      this.clean();
      return;
    }
    this.fileName = file.name;
    this.isImage = !!file.type.match(/image(\/jpe?g | png | bmp | gif)?/);
    this.fileUrl = this.isImage ? await this.converToUrl(file) : undefined;
    console.log(
      'no getter so ',
      this.mime,
      'so use ',
      this._mime,
      this.allowedSize,
      this
    );
  }
  clean() {
    this.value = undefined;
    this.inputRef.value = null as unknown as string;
    this.isImage = false;
    this.fileName = undefined;
    this.fileUrl = undefined;
    console.log(this);
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
  validateFile(file: File) {
    const fileType = file.type;
    const fileSize = +((file.size / 1024) * 1024).toFixed(2);
    const isSizeValid =
      +this.allowedSize <= 0 || fileSize <= +this.allowedSize || 0;

    if (!isSizeValid) {
      return {
        isValid: false,
        message: `Large size: Allowed size is ${this.allowedSize}`,
      };
    }
    console.log('this._mime', this._mime, 'fileType', fileType);
    const isMimeValid =
      this._mime.length === 0 || this._mime.some((m) => fileType.includes(m));

    if (!isMimeValid) {
      return {
        isValid: false,
        message: `Media type not allowed: Allowed types is ${this._mime.join(
          ', '
        )}`,
      };
    }

    return {
      isValid: true,
    };
  }
}
