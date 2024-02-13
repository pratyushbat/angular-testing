import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'app-listtemp'
})
export class CompdirDirective {

  constructor(private elemRef:ElementRef){ console.log("Compponent directive Applied on  tag",elemRef.nativeElement);}

}
