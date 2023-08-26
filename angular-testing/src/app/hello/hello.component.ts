import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { GreetComponent } from '../greet/greet.component';
import { GreetcComponent } from '../greetc/greetc.component';
import { BehaviorSubject, concatMap, map, startWith, tap } from 'rxjs';
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
  isLoadingProm = true;

  constructor(private httpClient: HttpClient,private ref: ChangeDetectorRef,public readonly postAPI: PostAPI) { }

  ngOnInit(): void { this.can = true; }

  ngAfterViewInit(): void {


    //1st tick  -vid 61
    //console.log('hello')

    //so in verification stage name is still ajit so no error given
    //2nd tick
   // setTimeout(() => { console.log('test') }, 0);
    Promise.resolve().then(() => {
      this.name = "Vijay";
      // this.can=true;
    })

    setTimeout(() => { 
      this.message = 'Evening'
    });
    // or below line to avoid error
    this.ref.detectChanges();
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(
      // with startwith it changes on 1st tick 
      // startWith([]),
      tap(() => {
        this.isLoading = false;
        //console.log('enter', this.isLoading)
      })
    )
      .subscribe({
        next: (posts) => {
          //console.log('posts---', posts, this.isLoading);
        },
        error: (err) => console.log(err),
      });

    const pr = new Promise((resolve, reject) => {
      this.isLoadingProm = false;
      resolve(null)
    });
    pr.then(() => {
      // 2nd tick stack empty
      this.isLoadingProm = true;
    })

    this.postAPI.getPosts().subscribe((list) => {
      console.log(list);
    })
  }


}
@Injectable({
  providedIn: "root",
})
class PostAPI {

  constructor(private httpClient: HttpClient){}
  private readonly loadingSubject = new BehaviorSubject(false);

  public isLoading$ = this.loadingSubject.asObservable();

  public getPosts() {
    //console.log('hello--',this.isLoading$)
    this.loadingSubject.next(true);

    return  this.httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(() => {
        //console.log('inside',this.isLoading$)
        this.loadingSubject.next(false);
      })
    );
  }
}
