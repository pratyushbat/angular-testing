import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterContentInit,
  ContentChild,
  ViewEncapsulation,
} from '@angular/core';
import { ItemComponent, ItemService } from '../item/item.component';
import {
  ColorDirective,
  ListTypeDirective,
} from 'src/app/directives/item-directives';
import { LIST_TYPE } from 'src/app/enums/list-type.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit  {
  // @ViewChild(ItemComponent , {read: ElementRef}) item!: ElementRef<HTMLElement>;
  // @ViewChild(ItemComponent , {read: ColorDirective}) item!: ColorDirective;
  // @ViewChild(ItemComponent , {read: ListTypeDirective}) item!: ListTypeDirective;

  // constructor(){}

  // ngAfterViewInit(): void {
  //   console.log('list :::', this.item);
  //   setTimeout(()=>{

  //     this.item.apply(LIST_TYPE.DASH)
  //   })
  // }
  @ViewChild(ItemComponent, { read: 'title' }) item!: string;
  @ViewChild(ItemComponent, { read: ColorDirective }) item2!: ColorDirective;
  @ViewChild(ItemComponent, { read: ItemService }) item3!: ItemService;
  @ViewChild('namedItem') item4!: ItemComponent;
  @ViewChild('namedItem', { read: 'title' }) item5!: string;
  @ViewChild('namedItem', { read: 'id' }) item6!: string;
  @ViewChild('id', { read: ItemService }) item7!: ItemService;
  @ViewChild('title', { read: ItemComponent }) item8!: ItemComponent;
  @ViewChild('id', { read: ItemComponent }) item9!: ItemComponent;
  @ViewChild(ColorDirective, { read: 'id' }) item10!: ItemComponent;
  @ViewChild(ListTypeDirective, { read: ColorDirective })
  item11!: ColorDirective;
  @ViewChild(ItemService, { read: ElementRef })
  item12!: ElementRef<HTMLElement>;
  @ViewChildren('namedItem', { read: 'title' }) items!: QueryList<string>;
  @ViewChildren('id') items2!: QueryList<string>;
  @ViewChildren('title', { read: ItemComponent })
  items3!: QueryList<ItemComponent>;
  @ViewChildren(ColorDirective) items4!: QueryList<ColorDirective>;
  @ViewChildren(ListTypeDirective, { read: ElementRef }) items5!: QueryList<
    ElementRef<HTMLElement>
  >;
  @ViewChildren(ItemService) items6!: QueryList<ItemService>;
  @ViewChildren(ItemService, { read: ListTypeDirective })
  items7!: QueryList<ListTypeDirective>;
  @ViewChildren('id,title', { read: ItemComponent })
  items8!: QueryList<ItemComponent>;
  @ViewChildren('item ,namedItem')  items9!: QueryList<ItemComponent>;
  constructor() {}

 

  ngAfterViewInit(): void {
    console.log('list :::', this.item);
    this.item2.apply('green');
    this.item3.getItems().subscribe(console.log);
    console.log('item4 namedItem ', this.item4.value);
    console.log('item5 namedItem :: title', this.item5);
    console.log('item6 namedItem :: id', this.item6);
    console.log('item7  id :: ItemService', this.item7);
    console.log('item8 title :: ItemComponent', this.item8);
    console.log('item9 id :: ItemComponent', this.item9);
    console.log('item10 ColorDirective :: id', this.item10);
    console.log('item11 ListTypeDirective :: ColorDirective', this.item11);
    this.item11.apply();
    console.log('item12 ItemService :: ElementRef', this.item12);

    // setTimeout(()=>{

    //   this.item.apply(LIST_TYPE.DASH)
    // })

    this.items.forEach((item) => console.log(item));
    this.items2.forEach((item: any) => {
      console.log(item);
    });
    this.items3.forEach((item: any) => {
      console.log(item.value);
    });
    const colors = ['pink', 'blue'];
    this.items4.forEach((color, index) => color.apply(colors[index]));

    // this.items5.forEach((item: any) =>
    //   item.nativeElement.classList.add('text-blue')
    // );
    this.items6.forEach((item: ItemService) =>
      item.getItems().subscribe(console.log)
    );
    const types = [LIST_TYPE.BULLET, LIST_TYPE.DASH];

    this.items7.forEach((listType, index) => {
      setTimeout(() => {
        listType.apply(types[index]);
      });
    });
    console.log(this.items8);
    console.log(this.items9);
  }
}
