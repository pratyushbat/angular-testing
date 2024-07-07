import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from "jquery";
@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {

  @Input() tooltip:any;
  private _tooltipEle:any;
 
  constructor(private el: ElementRef) {}
  
  ngAfterContentInit() {
    this._tooltipEle = $(`<div class="tooltip">${this.tooltip}<div class="tooltip-arrow"></div></div>`).appendTo( "body" );
    this._createTooltip();
  }

  @HostListener("mouseover")
  showTooltip() {
   this.toggleTooltip();
  }
  
  @HostListener("mouseout")
  removeTooltip() {
    this.toggleTooltip();
  }
  
  private _createTooltip() {
    // create tooltip...
  }
  
  toggleTooltip() {
    this._tooltipEle.toggleClass("tooltip-show")
  }

}
