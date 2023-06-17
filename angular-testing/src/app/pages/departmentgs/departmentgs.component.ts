import { Component, Input, SimpleChanges } from '@angular/core';
import { Department } from 'src/app/app.component';

@Component({
  selector: 'app-departmentgs',
  templateUrl: './departmentgs.component.html',
  styleUrls: ['./departmentgs.component.scss']
})
export class DepartmentgsComponent {
  private _department!: Department
  @Input()
  get department(): Department {
    return this._department;
  }
  set department(department:Department){
    this._department=department;
    if(!this._department){
      return;
    }
    const depIndex = this.records.findIndex(dep => dep.depId === department.depId);
    if (depIndex < 0) {
      this.department.teachers = [];
      this.records.push(this.department);
      this.teacher = '';
    }
    console.log('department', this.department)

  }

  private _teacher!: string
  @Input()
  get teacher(): string {
    return this._teacher;
  }
  set teacher(val:string){
    this._teacher=val;
    if (val && val.trim().length) {
      this.department.teachers?.push(val);
    }
    console.log('pushing', this.department)
  }


  records: Department[] = [];

}
