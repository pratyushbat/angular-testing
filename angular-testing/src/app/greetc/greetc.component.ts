import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetc',
  templateUrl: './greetc.component.html',
  styleUrls: ['./greetc.component.scss']
})
export class GreetcComponent implements OnInit {
  
  @Input()
  message!:string;

  public isAllowed=false;

  ngOnInit(): void {

    // moving isallowed from ngonint to constructor is one solution second order
    if(isMorningTime()){
      this.isAllowed=true;
    }
  }
}

function isMorningTime() {
 const hours=new Date().getHours();
 return hours>12;
}

