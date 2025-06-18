import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router:Router){

  }

fnLogin(){  
  if(this.username==this.password){
    localStorage.setItem("token",this.username);
    this.str="Login is successful";
    this.router.navigate(['/'],{queryParams:{id:1,name:'Pencil',price:20}})
  }else{
    this.str="Login failed";
    localStorage.clear();
  }
}
}
