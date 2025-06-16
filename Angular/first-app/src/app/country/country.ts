import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  imports: [FormsModule, CommonModule],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class Country {
  countries:string[]=[];
  country:string='';

  fnAddCountry(){
    if(this.country)
      this.countries.push(this.country);
    console.log(this.countries);
    
  }
}
