import { Component, Injectable, Input } from '@angular/core';
import { range } from 'rxjs';
import { LIST_TYPE } from 'src/app/enums/list-type.enum';

@Injectable()
export class ItemService{
  getItems(){
    return range(1,11);
  }
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers:[
    {provide: "id", useValue:"itemId"},
    {provide:"title",useValue:"An unique item title"},
    ItemService
  ]
})
export class ItemComponent {

  @Input() value!: string;
  @Input() type: LIST_TYPE| string=LIST_TYPE.BULLET;

  constructor(){}
}
