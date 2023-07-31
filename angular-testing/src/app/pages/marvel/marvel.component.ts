import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(MovieComponent) movieCmp!: MovieComponent;
  releasedMovie!: Movie;
  movieComments!: any[];
  
  constructor() { }
  
  
  ngOnInit(): void {  }

  ngAfterContentInit(): void {  }
 
  ngAfterContentChecked(): void {
    console.log('called')
     if (this.releasedMovie)
      return;

    if (this.movieCmp.movie.isReleases){

      this.releasedMovie = this.movieCmp.movie;
      this.fetchComments()
    }

  }

  fetchComments() {
    console.log(this.releasedMovie.id);
    const url = `https://jsonplaceholder.typicode.com/posts/${this.releasedMovie.id}/comments`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((json) => {this.movieComments=json || [] ;console.log(json)});
  }

}
