import { Component } from '@angular/core';
import { PhotoEvent } from './pages/multiplechildren/photo/photo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular-testing';

  // user
  userIds: number[] = [1, 2, 3, 4, 5];

  public selectedId: number|undefined;
  onIdSelection(newId: any):void {
    this.selectedId = + newId;
  }
  // user
// user-c

public users=[
  {name:'Ajit',id:2},
  {name:'Nitish',id:3},
  {name:'Parveen',id:4},  
  {name:'Akshay',id:5},
];
public onNameChange(changedUser:any):void{

  const user:any=this.users.find(user=>user.id=== changedUser.id);
  user['name']=changedUser.name;
}
// user-c

//DEPARTMENT
public departments=[
  {name:"CSE",depId:23},
  {name:"EEE",depId:24},
  {name:"IT",depId:26},
  {name:"ME",depId:27}
  
];
public selectedDept!:Department;
onDepartmentChange(depIndex:string){
this.selectedDept=this.departments[+depIndex]
}
//DEPARTMENT


//photo
photos:Photo[]=[
  {id :1,name:'Labra',description:'Labra',src:'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'},
  {id :2,name:'SDD',description:'SDD',src:'https://fastly.picsum.photos/id/877/200/300.jpg?grayscale&hmac=FOZGF0rM7zWjUj5WdQNup5xu5aSmqElwkG5ZAk03Ny8'},
  {id :3,name:'sdad',description:'sdad',src:'https://images.squarespace-cdn.com/content/v1/58d09402db29d660e4781a57/a0b4f155-d9ea-412e-979b-300dd47bbff3/Hogan_Josh_SmallHero_BigMultiverse_AntMan_D23_2022_7886.JPG'},
  {id :4,name:'Labdasdra',description:'Labdasdra',src:'https://static01.nyt.com/images/2018/07/06/arts/06antman1-dressrefer/06antman1-dressrefer-superJumbo.jpg'},
  {id :5,name:'zLabra',description:'zLabra',src:'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'}
];

onRemoveEvent(evt:PhotoEvent){
  this.photos=this.photos.filter(p=>p.id!=evt.photo.id);

}
}


export class Department{
  name!: string;
  depId!: number;
  teachers?: string[];
}

export interface Photo{
  id:number;
  name:string;
  src:string;
  description:string;
}