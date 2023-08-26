import { AfterViewInit, Component, Directive, ElementRef, QueryList, ViewChildren } from '@angular/core';
@Directive({
  selector: "[imgPreview]",
})
export class ImgPreviewDirective {
  constructor(public readonly elemRef: ElementRef) { }
}
@Component({
  selector: 'app-appc',
  templateUrl: './appc.component.html',
  styleUrls: ['./appc.component.scss']
})
export class AppcComponent implements AfterViewInit {
  //1st
  //@ViewChildren(ImgPreviewDirective) imgInpList!: QueryList<ImgPreviewDirective>;
  
  @ViewChildren(ImgPreviewDirective, { read: ElementRef }) imgInpList!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    //1st way
    // this.imgInpList.forEach((directive) => {
    //    const inp = directive.elemRef.nativeElement;
    //    console.log(directive, directive.elemRef.nativeElement)
    //   inp.addEventListener("change", () => this.previewImage(inp));

    // });

    //2st way
    this.imgInpList.forEach((elemRef) => {
      const inp = elemRef.nativeElement;
      //console.log(elemRef, elemRef.nativeElement)
      inp.addEventListener("change", () => this.previewImage(inp));

    });
  }

  private previewImage(inpElement: HTMLInputElement) {
    const file = inpElement.files?.item(0);
    const inputContainer = inpElement.parentElement;
    const imgContainer = inputContainer?.nextElementSibling;
    //console.log(inpElement.parentElement, inpElement.parentElement?.nextElementSibling);
    const imgTag = imgContainer?.firstElementChild as HTMLImageElement;
    //console.log(imgTag)
    const fileReader = new FileReader();

    fileReader.onloadend = (evt) => {
      imgContainer?.classList.remove("hide");
      //console.log(evt.target)
      imgTag.src = evt.target?.result as string;
    };

    fileReader.readAsDataURL(file as File);
  }
}
