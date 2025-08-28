import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  message?:string;

constructor(private data:DataService){
  this.data.currentMessage.subscribe(message=> this.message=message)
}

ngOnInit(){}
}
