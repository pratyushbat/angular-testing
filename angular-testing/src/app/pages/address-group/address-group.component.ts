import { Component, inject, Input, OnDestroy, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer,{skipSelf:true})
    }
  ]
})
export class AddressGroupComponent  implements OnInit ,OnDestroy{
// @Input() form!:FormGroup;
parentContainer = inject(ControlContainer);

@Input({required:true}) controlKey='';
@Input() label='';

get parentFormGroup(){
  return this.parentContainer.control as FormGroup;
}
  constructor() {

  }
  ngOnDestroy(): void {
    // this.parentFormGroup.removeControl(this.controlKey)
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey,new FormGroup({
      zipCode:new FormControl(''),
      street:new FormControl(''),
    }))    
  }
}
