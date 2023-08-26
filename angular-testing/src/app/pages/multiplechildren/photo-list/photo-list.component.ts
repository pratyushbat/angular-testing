import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { PHOTO_EVENT_TYPE, PhotoComponent, PhotoEvent } from '../photo/photo.component';
import { Subscription, merge } from 'rxjs';

export class HighLightedComponent {
  constructor(public readonly instance: PhotoComponent | undefined = undefined, public readonly index = 0) { }
}

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, AfterContentInit {

  @ContentChildren(PhotoComponent) photoComponentQueryList!: QueryList<PhotoComponent>;
  public highlightedComponent: HighLightedComponent = new HighLightedComponent();

  private _componentsEvents$!: Subscription;
  constructor() {

  }

  private resetEventsSubscription() {
    if (this._componentsEvents$)
      this._componentsEvents$.unsubscribe();

      this._componentsEvents$=new Subscription();

  }
  ngAfterContentInit(): void {
    this.photoComponentQueryList.changes.subscribe((queryList: QueryList<PhotoComponent>) => {
      this.handleComponentEvents(queryList);
    })
    this.handleComponentEvents(this.photoComponentQueryList);
  }

  handleComponentEvents(cmpList: QueryList<PhotoComponent>) {
    this.resetEventsSubscription();
    cmpList.forEach((photoComponent, index) => {

      const events$ = merge(photoComponent.onSelect, photoComponent.onRemove).subscribe((evt: PhotoEvent) => {
        this.onPhotoComponentevent(photoComponent, index, evt.type);
      });
      this._componentsEvents$.add(events$);

      // photoComponent.onSelect.subscribe((evt: PhotoEvent) => {
      //   this.onPhotoComponentevent(photoComponent, index, evt.type);
      // });

      // photoComponent.onRemove.subscribe((evt: PhotoEvent) => {
      //   this.onPhotoComponentevent(photoComponent, index, evt.type);
      // });

    })
  }

  private onPhotoComponentevent(selectedPhotoComponent: PhotoComponent, currIdx: number, evtType: PHOTO_EVENT_TYPE): void {
    // to unselect previous selected component;
    const { index: prevIndx, instance: prevSelectedComponent } = this.highlightedComponent;
    //console.log(prevIndx, prevSelectedComponent)
    switch (evtType) {
      case PHOTO_EVENT_TYPE.SELECT:
        if (prevSelectedComponent && prevIndx != currIdx) {
          prevSelectedComponent.selected = false;
        }
        this.highlightedComponent = new HighLightedComponent(selectedPhotoComponent, currIdx);
        return;

      case PHOTO_EVENT_TYPE.REMOVE:
        if (prevSelectedComponent && prevIndx === currIdx) {
          this.highlightedComponent = new HighLightedComponent();
        }
        return;
    }

  }

  ngOnInit(): void {

  }

  changePhoto(incUnit: number): void {
    let { index, instance: component } = this.highlightedComponent;
    //console.log(index, component)
    const cmpListLength = this.photoComponentQueryList.length;
    if (component) {
      component.selected = false;
      index = (index + incUnit) % cmpListLength;
      index = index < 0 ? cmpListLength - 1 : index;
    }
    const photoComponent = this.photoComponentQueryList.get(index);
    //console.log(photoComponent, index)
    if (!photoComponent || photoComponent.selected) {
      return;
    }
    this.highlightedComponent = new HighLightedComponent(photoComponent, index);
    photoComponent.emitSelected();

  }

}
