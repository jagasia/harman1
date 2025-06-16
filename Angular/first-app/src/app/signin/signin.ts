import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  username:string='';
  password:string='';
  result:string='';
  resultStyle:string='';

  fnLogin(){
    if(this.username==this.password){
      this.result="Success";
      this.resultStyle="alert alert-success";
    }else{
      this.result="Failure";
      this.resultStyle="alert alert-danger";
    }
  }
}
