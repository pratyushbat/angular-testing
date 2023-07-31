import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Input()
  isOpened:boolean=false;

  public open()  {
    if(this.isOpened)
    return;

    this.isOpened =true;
  }

}
