import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { POST_TYPE, PostOptions } from 'src/app/interfaces/post-option.interface';
import { UserPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  implements OnInit {
  @Input() postOptions!: PostOptions;

  posts: UserPost[] = [];
  
  constructor(private httpClient: HttpClient){

  }

  ngOnInit() {
    if (this.postOptions) {
      this.getPosts(this.postOptions);
    }
  }

  public getPosts(postOptions: PostOptions) {

    const { id, type: postType } = postOptions;

    if (!id && postType !== POST_TYPE.ALL_POSTS) {
      return;
    }

    let url = `https://jsonplaceholder.typicode.com`;

    switch (postType) {
      case POST_TYPE.POST:
        url += `/users/${id}/posts`;
        break;

      case POST_TYPE.PHOTO:
        url += `/users/${id}/photos`;
        break;

      case POST_TYPE.COMMENT:
        url += `/posts/${id}/comments`;
        break;

      case POST_TYPE.ALL_POSTS:
        url += `/posts`;
        break;
    }

    this.httpClient.get<UserPost[]>(url).subscribe((posts) => {
    // ajax.getJSON<UserPost[]>(url)
      this.postOptions = postOptions; // important to place this statment here, if move outside will cause ExpressionChangedError
       this.posts = (posts || []).slice(0, 3);
       console.log(this.posts)
      // this.posts = posts;
    });
  }
}
