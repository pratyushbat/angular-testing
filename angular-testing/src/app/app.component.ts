import { Component } from '@angular/core';

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


}


export class Department{
  name!: string;
  depId!: number;
  teachers?: string[];
}