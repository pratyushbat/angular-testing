import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = '';
  
  constructor(private keyCLoakService:KeycloakService) { }

  ngOnInit(): void {
    this.initializedUserOptions();
  }
  initializedUserOptions(): void {
   this.user=this.keyCLoakService.getUsername();
  }

  logOut():void {
    this.keyCLoakService.logout('http://localhost:4200');
    console.log('logging out')
  }
}
