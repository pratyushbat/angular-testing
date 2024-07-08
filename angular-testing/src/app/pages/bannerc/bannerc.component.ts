import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-bannerc',
  templateUrl: './bannerc.component.html',
  styleUrls: ['./bannerc.component.scss']
})
export class BannercComponent {
  constructor(public country: CountryComponent) {

  }
}
