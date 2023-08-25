import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GreetComponent } from '../greet/greet.component';
import { GreetcComponent } from '../greetc/greetc.component';
import { concatMap, map, startWith, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements AfterViewInit, OnInit {
  @ViewChild(GreetComponent, { static: true }) greetCmp!: GreetComponent;
  @ViewChild(GreetcComponent, { static: true }) greetcCmp!: GreetcComponent;

  name: string = "Ajit";
  message: string = "morning";
  can = false;
  isLoading = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { this.can = true; }

  ngAfterViewInit(): void {


    //1st tick  -vid 61
    console.log('hello')

    //so in verification stage name is still ajit so no error given
    //2nd tick
    setTimeout(() => { console.log('test') }, 0);
    Promise.resolve().then(() => {
      this.name = "Vijay";
      // this.can=true;
    })

    setTimeout(() => { this.message = 'Evening' });

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(
      // startWith([]),
      tap(() => {
        this.isLoading = false;
        console.log('enter', this.isLoading)
      })
    )
      .subscribe({
        next: (posts) => {
          console.log('posts---', posts, this.isLoading);
        },
        error: (err) => console.log(err),
      });
  }


}
