import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';
  userIds: number[] = [1, 2, 3, 4, 5];

  public selectedId: number|undefined;
  onIdSelection(newId: any):void {
    this.selectedId = + newId;
  }
}
