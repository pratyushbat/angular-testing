import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/app.component';
@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input()
  public selectedPhoto!:Photo;
}
