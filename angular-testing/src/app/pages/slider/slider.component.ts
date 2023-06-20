import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { PhotoPreviewComponent } from '../photo-preview/photo-preview.component';
import { Photo } from 'src/app/app.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentInit {

  @Input()
  photos:Photo[]=[];

  private _selectedPhtoIndex=0;
  
  @ContentChild(PhotoPreviewComponent) photoComponent!:PhotoPreviewComponent;
  constructor(){}

  ngAfterContentInit(): void {

    if(!this.photoComponent.selectedPhoto)
      this.changeSlide(0)
      else
      this._selectedPhtoIndex=this.photos.findIndex(p=>p===this.photoComponent.selectedPhoto);
  
  }

  changeSlide(inc:number){
    const nextIndex=(this._selectedPhtoIndex+inc)%this.photos.length;
    this._selectedPhtoIndex=nextIndex<0?this.photos.length-1:nextIndex;
    const selectedPhoto=this.photos[this._selectedPhtoIndex];
    this.photoComponent.selectedPhoto=selectedPhoto;

  }
}
