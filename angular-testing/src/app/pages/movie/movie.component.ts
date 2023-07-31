import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
@Input()movie!:Movie;

releaseMovie(){
  if(this.movie.isReleases)
  return;
  this.movie.isReleases=true;
}
}
