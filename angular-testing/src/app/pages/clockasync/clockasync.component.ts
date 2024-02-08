import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-clockasync',
  templateUrl: './clockasync.component.html',
  styleUrls: ['./clockasync.component.scss'],
})
export class ClockasyncComponent implements OnInit {
  time!: String;
  timeSub!: Subscription;

  time$!: Observable<String>;

  ngOnInit(): void {
    // this.timeSub = timeInterval().subscribe((time) => {
    //   this.time = time;
    //   console.log(time);
    // });
    this.time$ = timeInterval();
  }
}

function timeInterval() {
  return interval(1000).pipe(
    tap((x) => {
      console.log('interval running', x);
    }),
    map((x) => new Date().toUTCString() + ': ' + x)
  );
}
