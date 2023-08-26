import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Department } from 'src/app/app.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnChanges {
  @Input()
  department !: Department;
  @Input()
  teacher !: string;

  records: Department[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['department'] && changes['department'].currentValue) {
      
      const depIndex = this.records.findIndex(dep => dep.depId === this.department.depId);
      if (depIndex < 0) {
        this.department.teachers = [];
        this.records.push(this.department);
        this.teacher = '';
      }
      //console.log('department',this.department)
    }
    if (changes['teacher']) {
    
      
      if (this.teacher && this.teacher.trim().length){
        //console.log('pushing',this.teacher)
        this.department.teachers?.push(this.teacher);
      }
      //console.log('records',this.records)
    }

  }
}
