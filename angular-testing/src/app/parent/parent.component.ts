import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit ,AfterViewInit {
  @ViewChild(ChildComponent) child?:ChildComponent;

  message?:string;
  textSms: string | undefined;

constructor(private data:DataService){
 
}

  ngAfterViewInit(): void {
    this.textSms=this.child?.textSms;
  }

ngOnInit(){

   this.data.currentMessage.subscribe( (message ) => {
   this.message=message;
  })
}
}
