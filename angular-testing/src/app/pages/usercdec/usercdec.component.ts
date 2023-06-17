import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { OnChanges } from 'src/app/shared/decorators/onchange.decorator';

@Component({
  selector: 'app-usercdec',
  templateUrl: './usercdec.component.html',
  styleUrls: ['./usercdec.component.scss']
})
export class UsercdecComponent {
  uname!: string;
  
  // private _namex!: string;

  // @Input()
  // get namex(): string {
  //   return this._namex;
  // }
  
  // set namex(val: string) {
  //   this._namex = val;
  //   if (val) {
  //     console.log(val)
  //     this.uname = val.charAt(0) + val.substring(1);
  //   }
  // }
  @Input()
  @OnChanges<string>(function(this:UsercdecComponent,value){ this.uname=value.charAt(0)+value.substring(1);})
  namex!:string;
isMature:boolean=true;

  @Input()
  @OnChanges<string>(function(this:UsercdecComponent,value){ if(+value>18) this.isMature=true;

  })
   dob!: string;

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
