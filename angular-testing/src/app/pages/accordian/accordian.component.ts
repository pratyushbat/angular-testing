import { Component, ContentChild } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})  
export class AccordianComponent {

@ContentChild(TabComponent) tab!:TabComponent;

}
