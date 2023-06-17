import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userc',
  templateUrl: './userc.component.html',
  styleUrls: ['./userc.component.scss']
})
export class UsercComponent implements OnChanges {
  uname!: string;
  
  private _namex!: string;

  @Input()
  get namex(): string {
    return this._namex;
  }
  
  set namex(val: string) {
    this._namex = val;
    if (val) {
      console.log(val)
      this.uname = val.charAt(0) + val.substring(1);
    }
  }

  @Input() dob!: string;

  @Input() user: Record<string, any> | any;
  @Output() nameEvt = new EventEmitter();
  initialName: string | any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['user'])
    if (changes['user']) {

      const { currentValue, firstChange } = changes['user'];
      if (firstChange && currentValue)
        this.initialName = currentValue.name;
    }
  }

  changeName(name: any): void {
    this.user['name'] = name;
    this.nameEvt.emit(
      {
        id: this.user['id'],
        name
      },
    )

  }
  resetName(): void {
    this.changeName(this.initialName);
  }
}
