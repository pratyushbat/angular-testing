import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Output() accItem = new EventEmitter<string>();

  @Input()
  isOpened: boolean = false;

  public open() {
    if (this.isOpened)
      return;

    this.isOpened = true;
  }
  addNewItem(value: string) {
    this.accItem.emit(value);
  }
}
