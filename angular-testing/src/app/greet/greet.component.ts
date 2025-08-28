import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent {
@Input()
message!:string;


}
