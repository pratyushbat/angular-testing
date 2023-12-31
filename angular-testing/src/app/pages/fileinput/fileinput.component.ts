import { AfterContentInit, Component, ContentChild, Directive, ElementRef } from '@angular/core';
@Directive({
  selector:'input[type=file]'
})
export class FileInput{

  constructor(public elemRef:ElementRef<HTMLInputElement>){}
}

@Component({
  selector: 'app-fileinput',
  templateUrl: './fileinput.component.html',
  styleUrls: ['./fileinput.component.scss']
})
export class FileinputComponent implements AfterContentInit {
  public previewSrc!: string;
  public file!: File;
  //using templaete ref variable
  // @ContentChild("file") fileInputElement!: ElementRef<HTMLInputElement>;
  //using directive
  @ContentChild(FileInput ) fileInputElement!: FileInput;
  constructor() {

  }

  ngAfterContentInit(): void {
    //console.log('fileInputElement', this.fileInputElement);
    const { nativeElement } = this.fileInputElement.elemRef;
    //console.log('nativeElement', nativeElement);
    nativeElement.style.display = "none";
    nativeElement.addEventListener('change', (evt) => {
      this.previewImage(evt.target as HTMLInputElement);
    })
    //class list cann be added through app  only
    // nativeElement.classList.add('d-none')
  }

  previewImage(inpRef: HTMLInputElement) {
    //console.log(inpRef.files?.item(0));
    const file = inpRef.files?.item(0);
    this.file = file as File;
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
      this.previewSrc = evt.target?.result as string;
    })
    reader.readAsDataURL(file as Blob);
  }

  openFileDialog(): void {
    this.fileInputElement.elemRef.nativeElement.click();
  }

}
