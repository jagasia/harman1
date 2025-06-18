import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
showPassword:boolean=true;
type:string='password';
username:string="";
password:string="";
str:string="";
@Input() title:string='';

fnLogin(){  
  if(this.username==this.password){
    localStorage.setItem("token",this.username);
    this.str="Login is successful";
  }else{
    this.str="Login failed";
    localStorage.clear();
  }
}
}
