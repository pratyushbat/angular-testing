import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, OnDestroy {
  time!: String;
  timeSub!: Subscription;
  ngOnInit(): void {
    this.timeSub = timeInterval().subscribe((time) => {
      this.time = time;
      console.log(time);
    });
  }
  ngOnDestroy(): void {
    this.timeSub?.unsubscribe;
  }
}

function timeInterval() {
  return interval(1000).pipe(
    tap(() => {
      console.log('interval running');
    }),
    map((x) => new Date().toUTCString() + ': ' + x)
  );
}
