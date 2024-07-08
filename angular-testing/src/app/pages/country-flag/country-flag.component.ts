import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent {
  constructor(public country: CountryComponent) {

  }

}
