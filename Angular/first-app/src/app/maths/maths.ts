import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maths',
  imports: [FormsModule],
  templateUrl: './maths.html',
  styleUrl: './maths.css'
})
export class Maths {
  no1:number=0;
  no2:number=0;
  result:number=0;

  fnAdd(){
    this.result=this.no1+this.no2;
  }
}
