import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/app.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input()
  photo!: Photo;

  @Input()
  selected: boolean = false;

  @Output()
  onSelect = new EventEmitter<PhotoEvent>();

  @Output()
  onRemove = new EventEmitter<PhotoEvent>();

  emitSelected() {
    this.selected = true;
    this.onSelect.emit({photo:this.photo,type: PHOTO_EVENT_TYPE.SELECT})
  }

  emitRemoved() {
    this.selected = false;
    this.onRemove.emit({photo:this.photo,type: PHOTO_EVENT_TYPE.REMOVE})
  }

}

export interface PhotoEvent {
  type: PHOTO_EVENT_TYPE;
  photo: Photo;
}
export enum PHOTO_EVENT_TYPE {
  SELECT = "SELECT",
  REMOVE = "REMOVE"
}