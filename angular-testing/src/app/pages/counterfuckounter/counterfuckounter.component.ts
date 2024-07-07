import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter-fuckounter',
  templateUrl: './counterfuckounter.component.html',
  styleUrls: ['./counterfuckounter.component.scss']
})
export class CounterfuckounterComponent implements OnInit {

  @Input()
  startFrom = 0;

  @Output()
  startFromChange= new EventEmitter();

  ngOnInit(): void {
    setTimeout(()=> this.startFrom =0,10000);
    setInterval(() => {
      this.startFrom = this.startFrom + 1;
      this.startFromChange.emit(this.startFrom)
    }, 1000)
  }
}
