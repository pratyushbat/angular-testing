import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-selected.component.html',
  styleUrls: ['./country-selected.component.scss']
})
export class CountrySelectedComponent {
  constructor(public  country: CountryComponent) {

  }

}
