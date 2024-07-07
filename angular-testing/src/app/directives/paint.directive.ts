import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class PaintContext{
  $implicit:any=null;
  name:any=null;
  location:any=null;
  paintXCoord:any=null;
  paintYCoord:any=null;
}
@Directive({
  selector: '[paint]'
})
export class PaintDirective {

  @Input()
  paintXCoord!:number;
  @Input()
  paintYCoord!:number;

  constructor(private readonly elemRef: ElementRef , private readonly template:TemplateRef<PaintContext>,private container:ViewContainerRef) {
    console.log('-------------paint-----------')
   console.log(this.elemRef.nativeElement);
   console.log(this.template);
  }

  ngOnInit():void{

      this.container.createEmbeddedView(this.template,{$implicit:"World",name:'Pratyush',location:'India' ,paintXCoord:this.paintXCoord, paintYCoord:this.paintYCoord})
      this.container.clear();
      console.log(this.paintXCoord,this.paintYCoord)

    
  }

}
