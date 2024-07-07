import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  exportAs:'bannerCtx',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')])
    ]),
    trigger('visblebn', [
      // ...
      state(
        'show',
        style({
           display:'block',
           color:'white'
        }),
      ),
      state(
        'hide',
        style({
          color:'green',
          display:'none',
        }),
      ),
      transition('show => hide', [animate('5000ms linear',
       
      )]),
      transition('hide => show', [animate('6000ms linear'),
       ])
    ]),
  ],
})
export class BannerComponent {
  moreInfo?:boolean=false;

  // @HostBinding('@visblebn') get visblebnAnimation() {
  //   return this.arc;
  // }
  toggle(){
    this.moreInfo=!this.moreInfo;
  }
}
