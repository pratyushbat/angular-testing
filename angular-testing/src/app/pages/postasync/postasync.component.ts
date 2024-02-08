import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postasync',
  templateUrl: './postasync.component.html',
  styleUrls: ['./postasync.component.scss'],
})
export class PostasyncComponent {
  @Input()
  id!: number | string;

  post!: Post;

  post$!: Promise<Post>;

  constructor() {}

  ngOnInit(): void {
    // this.callPromiseAPI();
  }
  callPromiseAPI() {
    // pass promise or obsevable
    this.post$ = getPostById(this.id);
  }
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPostById(id: number | string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post = await response.json();

  return post;
}
