import { Component } from '@angular/core';
import { POST_TYPE } from 'src/app/interfaces/post-option.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  postOptions = {
    id: 5,
    type: POST_TYPE.POST,
  };
}
