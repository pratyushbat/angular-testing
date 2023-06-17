import { Component, Input } from '@angular/core';
import { Department } from 'src/app/app.component';
import { OnChanges } from 'src/app/shared/decorators/onchange.decorator';

@Component({
  selector: 'app-departmentgsdec',
  templateUrl: './departmentgsdec.component.html',
  styleUrls: ['./departmentgsdec.component.scss']
})
export class DepartmentgsdecComponent {
  @OnChanges<Department>(function(this:DepartmentgsdecComponent,department){
    const depIndex = this.records.findIndex(dep => dep.depId === department.depId);
    if (depIndex < 0 && department) {
      this.department.teachers = [];
      this.records.push(this.department);
      this.teacher = '';
    }
  })
  @Input()
  department!: Department
  
  @OnChanges<string>(function(this:DepartmentgsdecComponent,teacher){
    if (teacher && teacher.trim().length) {
      this.department.teachers?.push(teacher);
    }
    console.log('pushing', this.department)
  })
  @Input()
  teacher!: string


  records: Department[] = [];
}
