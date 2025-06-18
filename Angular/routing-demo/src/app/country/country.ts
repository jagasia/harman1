import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  imports: [FormsModule, CommonModule],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class Country {
  show=true;
  countries:string[]=['India','Australia','Srilanka'];
  country:string='';

  constructor(private router:Router){

  }

  fnAddCountry(){
    if(this.country)
      this.countries.push(this.country);
    console.log(this.countries);
    
  }

  fnSelect(cname:string){
    this.router.navigate(['/contact', cname]);    
  }
}
