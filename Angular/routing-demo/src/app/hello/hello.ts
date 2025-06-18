import { Component } from '@angular/core';
import { MyService } from '../my-service';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {

  constructor(private ms:MyService){

  }

  fnAdd(){
    // alert(this.ms.fnAdd());
  }

  fnUpdate(){
    // alert(this.ms.fnUpdate());
  }
}
