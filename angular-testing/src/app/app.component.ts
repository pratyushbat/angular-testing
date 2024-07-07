import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PhotoEvent } from './pages/multiplechildren/photo/photo.component';
import { Movie } from './interfaces/Movie';
import { UserPost } from './interfaces/post.interface';
import { POST_TYPE, PostOptions } from './interfaces/post-option.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, count, from, of } from 'rxjs';
import { ImgPreviewDirective } from './directives/imgpr.directive';
import { User } from './directives/user.interface';
import { BannerComponent } from './pages/banner/banner.component';
import { SizeSwitcherDirective } from './directives/size-switcher.directive';

interface TreeNode {
  name: string;
  techList?: TreeNode[];
}

@Directive({
  selector: '[fileInput]',
})
export class FileDirective {
  test: string = 'oo';
  constructor() {}
}

@Directive({
  selector: '[fileDIInput]',
})
export class FileDIDirective {
  constructor(public elmRef: ElementRef) {
    //console.log('---------', this.elmRef.nativeElement.files)
  }
}

function http(consumer: any, isPromise = false) {
  const url = 'https://jsonplaceholder.typicode.com/todos?&_limit=10';
  const http = new XMLHttpRequest();
  const onload = function () {
    // console.log('----',http.response)
    if (http.status === 200 && http.readyState == 4) {
      if (isPromise) consumer(http.response);
      else consumer.next(http.response);
    }
  };
  http.addEventListener('load', onload);
  http.open('GET', url);
  http.send();

  return () => {
    http.addEventListener('load', onload);
    http.abort();
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  date: any;
  // pipe
  user: User = {
    name: 'Ajit',
    id: 1,
    email: 'some@mail.com',
    picture: { name: 'xyz', link: 'https://picsum.photos/200/300' },

    // NOTE: uncomment below code to use the picture in `userPicture` pipe

    // picture: {
    //   name: "xyz",
    //   link: "https://picsum.photos/seed/2/200",
    // },
  };

  changeName(name: string) {
    if (!name || !name.trim().length) {
      return;
    }

    this.user.name = name;
  }

  // pipe cache
  phone = '9998889999';
  trimLength: string | number = 3;
  pattern = '-';
  username!: string;
  twitterLink = 'http://www.twitter.com/rakesh';
  emailone: string = 'pratyush@gmail.com';

  names:string[] = ['Ronaldo', 'Ajit', 'Sagar', 'Anusha', 'Aniket', 'Pankaj', 'Amitabh'];
  names$ :Promise<string[]>= Promise.resolve(this.names)
  filterKey!: string;

  sortKey: 'asc' | 'desc' | string = 'asc';

  @ViewChild(BannerComponent) banner : BannerComponent | undefined;


  // euivalent of line 2334
  @ViewChild('switcher',{read:SizeSwitcherDirective}) switcher : SizeSwitcherDirective | undefined;


  addName(name: string): void {
    if (!name || !name?.trim().length) {
      return;
    }

    this.names.push(name);
  }

  ngOnInit(): void {
    let acloc = [1, 4, 6, 94, 5, 4];
    this.sumofArray(acloc);
    // check if 4 is present in array

    this.obsandPromise();
    getTripData().subscribe((x: Trip) => (this.trip = x));
  }

  sumofArray(arr: any[]) {
    let p = this.sumA(arr, 0);
    console.log('sumA', p);
    let ap = this.checknumpresent(arr, 0, 4);
    console.log('checknumpresent', ap);
    let allindnum = this.allindnum(arr, 0, 4);
    console.log('allindnum', allindnum);
  }

  sumA(arr: any[], index: number): any {
    if (index === arr.length - 1) return arr[index];

    let px = this.sumA(arr, index + 1);
    return px + ':' + arr[index];
  }

  checknumpresent(arr: any[], index: number, num: number): any {
    if (index === arr.length - 1) {
      if (arr[index] === num) return true;
      else return false;
    }

    let px = this.checknumpresent(arr, index + 1, num);

    if (arr[index] === num) return true;
    else return px;
  }

  allindnum(arr: any[], index: number, num: number): any {
    if (index === arr.length - 1) {
      if (arr[index] === num) return [index];
      else return [];
    }

    let px = this.allindnum(arr, index + 1, num);

    if (arr[index] === num) {
      px.push(index);

      return px;
    } else return px;
  }
  obsandPromise() {
    const pr2 = new Promise((resolve) => {
      console.log('starting promise', resolve);
      //Emit a single value not stream
      // http(resolve, true);
      // http(resolve, true);
      // http(resolve, true);
      // http(resolve, true)
    });
    const obs2 = new Observable((observer) => {
      console.log('starting obs');
      // http(observer);
      // http(observer);
      // http(observer);
      // http(observer);
    });

    const obssub = obs2.subscribe((data) => console.log('*obs*', data));
    //obssub.unsubscribe();

    //Eager :consumer cannot cancel an observable

    //setTimeout(() => pr2.then((data) => console.log(data)), 4000);
    // producer cannot be close
    //     setTimeout(() => obs2.subscribe(data => console.log('**', data)), 4000);
    pr2.then((data) => console.log(data));
    //obs2.subscribe(data => console.log('**', data));
    const pr = new Promise((resolve) => {
      console.log('in promise:done');
      // resolve('promise:yep1');
      // resolve method do not accept multiple values as below
      // resolve('promise:yep2')
      var counter = 0;
      // setInterval(() => {
      //   counter += 1;
      //   console.log('counter inside', counter);
      //   resolve('promise:yep'+counter)
      // })
      setTimeout(() => resolve('promise:yep'), 2000);
    });

    pr.then((data) => console.log(data));
    //    setTimeout(() => pr.then((data) => console.log(data)), 4000);
    //

    // observable lazy

    const obs = new Observable((obs) => {
      console.log('obse:done');
      obs.next('obs:yep1');
      obs.next('obs:yep2');

      setTimeout(() => obs.next('obs:yep'), 2000);
    });

    obs.subscribe(console.log);
    //    setTimeout(() => obs.subscribe(console.log), 4000);
  }

  postOptions: any = {
    type: POST_TYPE.ALL_POSTS,
  };

  commentOptions = {
    id: 1,
    type: POST_TYPE.COMMENT,
  };

  public nodes = [
    {
      name: 'Web',
      children: [
        {
          name: 'Javascript',
          children: [
            {
              name: 'Ajax',
            },
            {
              name: 'DOM',
            },
          ],
        },
        {
          name: 'Angular',
          children: [
            {
              name: 'Rxjs',
            },
            {
              name: 'Typescript',
            },
          ],
        },
      ],
    },
    {
      name: 'Languages',
      children: [
        {
          name: 'C',
          children: [
            {
              name: 'Libuv',
              children: [
                {
                  name: 'Event Loop',
                },
              ],
            },
          ],
        },
        {
          name: 'C++',
        },
        {
          name: 'Java',
          children: [{ name: 'Spring Boot' }],
        },
      ],
    },
  ];

  techList: TreeNode[] = [
    {
      name: 'Angular',
      techList: [
        {
          name: 'Rxjs',
          techList: [],
        },
        {
          name: 'Typescript',
          techList: [],
        },
      ],
    },
    {
      name: 'Javascript',
      techList: [],
    },
    {
      name: 'React',
      techList: [
        {
          name: 'Router',
          techList: [],
        },
      ],
    },
    {
      name: 'Java',
      techList: [
        {
          name: 'Spring',
          techList: [
            {
              name: 'IOC',
              techList: [],
            },
            {
              name: 'DI',
              techList: [],
            },
          ],
        },
      ],
    },
  ];

  @ViewChild('nodesTemplate') section!: ElementRef<HTMLElement>;

  @ViewChild('teset') teset!: ElementRef<HTMLElement>;

  //without directive
  @ViewChild('inp') inpRef!: ElementRef<HTMLElement>;
  // @ViewChild(FileDirective) inpRef2Dr!: FileDirective;
  // with directive
  @ViewChild(FileDirective, { read: ElementRef })
  inpRef2Dr!: ElementRef<HTMLElement>;

  //with directive and dependency injection
  @ViewChild(FileDIDirective) inpRefDI!: FileDIDirective;

  // @ViewChildren('img') imgInpList!: QueryList<ElementRef>;
  // or
  // @ViewChildren(ImgPreviewDirective) imgInpList!: QueryList<ImgPreviewDirective>;
  // or
  @ViewChildren(ImgPreviewDirective, { read: ElementRef })
  imgInpList!: QueryList<ElementRef>;
  timeInMs!: number;

  isDestroyed = false;

  setTimeInMs(seconds: string | number) {
    this.timeInMs = +seconds * 1000;
  }
  ngAfterViewInit(): void {
    // this.imgInpList.forEach((directive) => {
    //   const inp = directive.elemRef.nativeElement;
    //   console.log('hurray')
    //   console.log(inp)

    //   inp.addEventListener("change", () => this.previewImage(inp));
    // });

    this.imgInpList.forEach((elemRef) => {
      const inp = elemRef.nativeElement;
      console.log('hurray');
      console.log(inp);

      inp.addEventListener('change', () => this.previewImage(inp));
    });

    //console.log(this.techList)

    const inptDr: any = this.inpRef2Dr?.nativeElement;
    inptDr?.addEventListener('change', () => {
      //console.log('changed using directive', inptDr.files)
    });
    const inpt: any = this.inpRef.nativeElement;
    inpt.addEventListener('change', () => {
      console.log('changed0 ::', inpt.files);
    });

    //console.log(this.inpRefDI.elmRef.nativeElement)
    const inptDI: any = this.inpRefDI.elmRef.nativeElement;
    inptDI.addEventListener('change', () => {
      //console.log('changing')
      console.log('changed using DI directive', inptDI.files);
    });

    const template = this.section.nativeElement;

    const ul = this.createNodes(this.techList);

    template.appendChild(ul);
  }

  private previewImage(inpElement: HTMLInputElement) {
    console.log(inpElement);
    const file = inpElement.files?.item(0);
    const inputContainer = inpElement.parentElement;
    console.log(inputContainer);
    const imgContainer = inputContainer?.nextElementSibling;
    console.log(imgContainer);
    const imgTag = imgContainer?.firstElementChild as HTMLImageElement;
    console.log(imgTag);
    const fileReader = new FileReader();

    fileReader.onloadend = (evt) => {
      imgContainer?.classList.remove('hide');

      imgTag.src = evt.target?.result as string;
    };

    fileReader.readAsDataURL(file as File);
  }

  private createNodes(tree: TreeNode[]) {
    const ul = document.createElement('ul');
    for (const node of tree) {
      const { name, techList } = node;
      const li = document.createElement('li');
      li.textContent = name;
      if (Array.isArray(techList) && techList.length) {
        const nestedUL = this.createNodes(techList);
        li.appendChild(nestedUL);
      }
      ul.appendChild(li);
    }
    return ul;
  }

  private createNodesCopy(tree: TreeNode[]) {
    const ul = document.createElement('div');
    ul.id = 'content';
    ul.className = 'note sd';
    // ul.innerHTML = '<p>CreateElement example</p>';

    let text = document.createTextNode('Create Element child ');
    let p1 = document.createElement('p');
    p1.textContent = 'Add p element';
    let h2 = document.createElement('h2');
    h2.textContent = 'Add h2 element';
    ul.appendChild(text);
    ul.appendChild(h2);
    ul.appendChild(p1);

    let uloriginal = document.createElement('ul');
    uloriginal.id = 'conatent';
    let li = document.createElement('li');
    li.textContent = 'Products';
    uloriginal.appendChild(li);
    ul.appendChild(uloriginal);

    const menu: any = document.querySelector('#menu');

    let li0 = document.createElement('li');
    li0.innerHTML = '<p  >CreateElemen tesett example</p>';
    let li2 = document.createElement('li');
    li2.textContent = 'Products';

    menu.appendChild(li0);
    menu.appendChild(li2);
    const button = document.createElement('button');
    button.innerText = 'Button';
    button.id = 'button-1';
    menu.appendChild(button);
    for (let i = 0; i < 2; i++) {
      let p = document.createElement('li');
      p.textContent = `Paragraph ${i}`;
      menu.appendChild(p);
    }
    //console.log('more optimized')
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 4; i++) {
      let p = document.createElement('li');
      p.textContent = `Paragraph ${i}`;
      fragment.appendChild(p);
    }
    menu.appendChild(fragment);
    let content: any = document.getElementById('menu');
    let firstChild = content.firstChild.nodeName;
    //console.log(firstChild, content.firstElementChild);

    //console.log(content.lastElementChild);
    //console.log(content.childNodes)
    //console.log(content.children)
    //console.log(this.teset.nativeElement.nextElementSibling);
    // let current = document.querySelector('.current');
    let current: any = this.teset.nativeElement;
    let nextSibling = current.nextElementSibling;

    while (nextSibling) {
      //console.log(nextSibling);
      // current=nextSibling;
      nextSibling = nextSibling.nextElementSibling;
    }

    let currentnew: any = document.querySelector('.lastch');
    //console.log(currentnew.previousElementSibling);

    let app: any = document.querySelector('#app');

    let langs = ['CSS', 'JavaScript', 'TypeScript'];

    let nodes = langs.map((lang) => {
      let li = document.createElement('li');
      li.textContent = lang;
      return li;
    });
    app.prepend(...nodes);
    app.prepend('headimng fdghdfgh');

    return ul;
  }

  title = 'angular-testing';

  // user
  userIds: number[] = [1, 2, 3, 4, 5];

  public selectedId: number | undefined;
  onIdSelection(newId: any): void {
    this.selectedId = +newId;
  }
  // user
  // user-c

  public users = [
    { name: 'Ajit', id: 2 },
    { name: 'Nitish', id: 3 },
    { name: 'Parveen', id: 4 },
    { name: 'Akshay', id: 5 },
  ];
  public onNameChange(changedUser: any): void {
    const user: any = this.users.find((user) => user.id === changedUser.id);
    user['name'] = changedUser.name;
  }
  // user-c

  //DEPARTMENT
  public departments = [
    { name: 'CSE', depId: 23 },
    { name: 'EEE', depId: 24 },
    { name: 'IT', depId: 26 },
    { name: 'ME', depId: 27 },
  ];
  public selectedDept!: Department;
  onDepartmentChange(depIndex: string) {
    this.selectedDept = this.departments[+depIndex];
  }
  //DEPARTMENT

  //photo
  photos: Photo[] = [
    {
      id: 1,
      name: 'Labra',
      description: 'Labra',
      src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    },
    {
      id: 2,
      name: 'SDD',
      description: 'SDD',
      src: 'https://fastly.picsum.photos/id/877/200/300.jpg?grayscale&hmac=FOZGF0rM7zWjUj5WdQNup5xu5aSmqElwkG5ZAk03Ny8',
    },
    {
      id: 3,
      name: 'sdad',
      description: 'sdad',
      src: 'https://images.squarespace-cdn.com/content/v1/58d09402db29d660e4781a57/a0b4f155-d9ea-412e-979b-300dd47bbff3/Hogan_Josh_SmallHero_BigMultiverse_AntMan_D23_2022_7886.JPG',
    },
    {
      id: 4,
      name: 'Labdasdra',
      description: 'Labdasdra',
      src: 'https://static01.nyt.com/images/2018/07/06/arts/06antman1-dressrefer/06antman1-dressrefer-superJumbo.jpg',
    },
    {
      id: 5,
      name: 'zLabra',
      description: 'zLabra',
      src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    },
  ];

  onRemoveEvent(evt: PhotoEvent) {
    this.photos = this.photos.filter((p) => p.id != evt.photo.id);
  }

  //movie
  movie: Movie = { id: 1, name: 'The Gaurs', isReleases: false };

  addItem(ev: any) {
    //console.log('app', ev)
  }

  ngusers: any[] = [];
  getUser(value: string) {
    this.http(value).subscribe((res) => {
      console.log('-----------------user');
      if (res) this.ngusers.push(res);
      console.log(res);
    });
  }

  private http(id: any): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return from(fetch(url).then((res) => res.json()));
  }

  trip!: Trip;
  rateCharge(distance: number = 0) {
    console.log('called with', distance);
    if (distance <= 50) return distance * 8;
    else if (distance > 50 && distance <= 100) return distance * 9;

    return distance * 12;
  }
}

export interface Trip {
  distance: number;
  from: string;
  to: string;
}
export class Department {
  name!: string;
  depId!: number;
  teachers?: string[];
}

export interface Photo {
  id: number;
  name: string;
  src: string;
  description: string;
}
function getTripData(): any {
  var tr: Trip = <Trip>{ distance: 10, from: 'shivam', to: 'mgh' };
  return of(tr);
  setTimeout(() => {
    return of(tr);
  }, 3000);


 

}
