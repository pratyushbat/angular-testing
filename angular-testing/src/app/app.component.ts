import { AfterViewInit, Component, Directive, ElementRef, ViewChild } from '@angular/core';
import { PhotoEvent } from './pages/multiplechildren/photo/photo.component';
import { Movie } from './interfaces/Movie';

interface TreeNode {
  name: string;
  techList?: TreeNode[];
}

@Directive({
  selector: "[fileInput]"
})
export class FileDirective {
  test: string = 'oo'
  constructor() { }
}


@Directive({
  selector: "[fileDIInput]"
})
export class FileDIDirective {
  constructor(public elmRef: ElementRef) {
    console.log('---------', this.elmRef.nativeElement.files)
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  techList: TreeNode[] = [
    {
      name: "Angular",
      techList: [
        {
          name: "Rxjs",
          techList: [],
        },
        {
          name: "Typescript",
          techList: [],
        },
      ],
    },
    {
      name: "Javascript",
      techList: [],
    },
    {
      name: "React",
      techList: [
        {
          name: "Router",
          techList: [],
        },
      ],
    },
    {
      name: "Java",
      techList: [
        {
          name: "Spring",
          techList: [
            {
              name: "IOC",
              techList: [],
            },
            {
              name: "DI",
              techList: [],
            },
          ],
        },
      ],
    },
  ];

  @ViewChild("nodesTemplate") section!: ElementRef<HTMLElement>;

  @ViewChild("teset") teset!: ElementRef<HTMLElement>;

  //without directive
  @ViewChild("inp") inpRef!: ElementRef<HTMLElement>;
  // @ViewChild(FileDirective) inpRef2Dr!: FileDirective;
  // with directive
  @ViewChild(FileDirective, { read: ElementRef }) inpRef2Dr!: ElementRef<HTMLElement>;

  //with directive and dependency injection
  @ViewChild(FileDIDirective) inpRefDI!: FileDIDirective;

  ngAfterViewInit(): void {
    console.log(this.techList)

    const inptDr: any = this.inpRef2Dr.nativeElement;
    inptDr.addEventListener('change', () => {
      console.log('changed using directive', inptDr.files)
    })
    const inpt: any = this.inpRef.nativeElement;
    inpt.addEventListener('change', () => {
      console.log('changed', inpt.files)
    })

    console.log(this.inpRefDI.elmRef.nativeElement)
    const inptDI: any = this.inpRefDI.elmRef.nativeElement;
    inptDI.addEventListener("change", () => {
      console.log('changing')
      console.log('changed using DI directive', inptDI.files)
    });



    const template = this.section.nativeElement;

    const ul = this.createNodes(this.techList);

    template.appendChild(ul);
  }

  private createNodes(tree: TreeNode[]) {
    const ul = document.createElement("ul");
    for (const node of tree) {
      const { name, techList } = node;
      const li = document.createElement("li");
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
    const ul = document.createElement("div");
    ul.id = 'content';
    ul.className = 'note sd';
    // ul.innerHTML = '<p>CreateElement example</p>';


    let text = document.createTextNode('Create Element child ')
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
    console.log('more optimized')
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 4; i++) {
      let p = document.createElement('li');
      p.textContent = `Paragraph ${i}`;
      fragment.appendChild(p);
    }
    menu.appendChild(fragment);
    let content: any = document.getElementById('menu');
    let firstChild = content.firstChild.nodeName;
    console.log(firstChild, content.firstElementChild);

    console.log(content.lastElementChild);
    console.log(content.childNodes)
    console.log(content.children)
    console.log(this.teset.nativeElement.nextElementSibling);
    // let current = document.querySelector('.current');
    let current: any = this.teset.nativeElement
    let nextSibling = current.nextElementSibling;

    while (nextSibling) {
      console.log(nextSibling);
      // current=nextSibling;
      nextSibling = nextSibling.nextElementSibling;
    }

    let currentnew: any = document.querySelector('.lastch');
    console.log(currentnew.previousElementSibling);

    let app: any = document.querySelector('#app');

    let langs = ['CSS', 'JavaScript', 'TypeScript'];

    let nodes = langs.map(lang => {
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
    this.selectedId = + newId;
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

    const user: any = this.users.find(user => user.id === changedUser.id);
    user['name'] = changedUser.name;
  }
  // user-c

  //DEPARTMENT
  public departments = [
    { name: "CSE", depId: 23 },
    { name: "EEE", depId: 24 },
    { name: "IT", depId: 26 },
    { name: "ME", depId: 27 }

  ];
  public selectedDept!: Department;
  onDepartmentChange(depIndex: string) {
    this.selectedDept = this.departments[+depIndex]
  }
  //DEPARTMENT


  //photo
  photos: Photo[] = [
    { id: 1, name: 'Labra', description: 'Labra', src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' },
    { id: 2, name: 'SDD', description: 'SDD', src: 'https://fastly.picsum.photos/id/877/200/300.jpg?grayscale&hmac=FOZGF0rM7zWjUj5WdQNup5xu5aSmqElwkG5ZAk03Ny8' },
    { id: 3, name: 'sdad', description: 'sdad', src: 'https://images.squarespace-cdn.com/content/v1/58d09402db29d660e4781a57/a0b4f155-d9ea-412e-979b-300dd47bbff3/Hogan_Josh_SmallHero_BigMultiverse_AntMan_D23_2022_7886.JPG' },
    { id: 4, name: 'Labdasdra', description: 'Labdasdra', src: 'https://static01.nyt.com/images/2018/07/06/arts/06antman1-dressrefer/06antman1-dressrefer-superJumbo.jpg' },
    { id: 5, name: 'zLabra', description: 'zLabra', src: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' }
  ];

  onRemoveEvent(evt: PhotoEvent) {
    this.photos = this.photos.filter(p => p.id != evt.photo.id);

  }


  //movie
  movie: Movie = { id: 1, name: "The Gaurs", isReleases: false };


  addItem(ev: any) {
    console.log('app', ev)
  }
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