import {
  Component,
  AfterContentInit,
  ElementRef,
  ContentChild,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ItemComponent, ItemService } from '../item/item.component';
import {
  ColorDirective,
  ListTypeDirective,
} from 'src/app/directives/item-directives';
import { LIST_TYPE } from 'src/app/enums/list-type.enum';

@Component({
  selector: 'app-app-list-one',
  templateUrl: './app-list-one.component.html',
  styleUrls: ['./app-list-one.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppListOneComponent implements AfterContentInit {
  @ContentChild(ItemComponent, { read: ElementRef })
  item!: ElementRef<HTMLElement>;

  @ContentChild('id', { read: ItemService }) item2!: ItemService;
  @ContentChild('title', { read: ItemComponent }) item3!: ItemComponent;
  @ContentChild(ColorDirective, { read: 'id' }) item4!: string;
  @ContentChild(ListTypeDirective, { read: ColorDirective })
  item5!: ColorDirective;

  @ContentChildren('namedItem', { read: 'title' }) item6!: QueryList<string>;
  @ContentChildren('id') item7!: QueryList<string>;
  @ContentChildren('title', { read: ItemComponent })item8!: QueryList<ItemComponent>;
  @ContentChildren(ColorDirective) item9!: QueryList<ColorDirective>;
  @ContentChildren(ListTypeDirective, {read: ElementRef}) item10!: QueryList<ElementRef<HTMLElement>>;
  @ContentChildren(ItemService) item11!: QueryList<ItemService>;
  @ContentChildren(ItemService, {read: ListTypeDirective}) item12!: QueryList<ListTypeDirective>;

  // @1 query using `ItemComponent`
  @ContentChildren(ItemComponent, { descendants: true })items!: QueryList<ItemComponent>;
  /********************************/

  // @2 query using string token `id` and `title`, read their string values
  @ContentChildren("id,title", { descendants: true }) items0!: QueryList<string>;

  /********************************/

  // @3 query using string token `id` and `title`, read `ItemComponent`
  @ContentChildren("id,title", { descendants: true, read: ItemComponent }) items2!: QueryList<ItemComponent>;

  /********************************/

  // @4 query using TemplateRef 'namedItem' and 'item', read `ItemComponent`
  @ContentChildren("namedItem,item", { descendants: true }) items4!: QueryList<ItemComponent>;

  ngAfterContentInit(): void {
    this.item.nativeElement.classList.add('new-text-blue');
    this.item2.getItems().subscribe(console.log);
    console.log('itmem 3', this.item3);
    console.log('itmem 4', this.item4);
    console.log('item 5', this.item5);
    this.item5.apply('green');
    console.log('app-list----------------');
    this.item6.forEach((item: any) => console.log(item));
    this.item7.forEach((item: any) => console.log(item));
    this.item8.forEach((item: ItemComponent) => console.log(item.value));
    const colors=["orange","pink"];
    this.item9.forEach((color,index)=>color.apply(colors[index]));
    this.item10.forEach((item:any)=>item.nativeElement.classList.add("text-red"));
    this.item11.forEach((item: ItemService) => item.getItems().subscribe(console.log));
    const types = [LIST_TYPE.BULLET, LIST_TYPE.DASH];

    this.item12.forEach((listType, index) => {
      setTimeout(() => {
        listType.apply(types[index]);
      });
    });

    console.log(this.items4)
    console.log(this.items0)
    console.log(this.items2)
    console.log(this.items)
  }
}
