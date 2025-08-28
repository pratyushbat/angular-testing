import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  textSms='grren';
  message?:string;

constructor(private data:DataService){
 
}

ngOnInit(){

   this.data.currentMessage.subscribe( (message ) => {
   this.message=message;
  })
}

newMessage(){
  this.data.changeMessage("hello from child component")
}
}
