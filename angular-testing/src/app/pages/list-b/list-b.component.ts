import { Component } from '@angular/core';

@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.scss'],
})
export class ListBComponent {
  public hello: string = 'hellp';
  public hello2: string = 'hellp2';
  isSel: boolean = false;
}
