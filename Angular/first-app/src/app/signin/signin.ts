import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

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
  @Output() loginEvent:EventEmitter<User>=new EventEmitter<User>()

  fnLogin(){
    
    // if(this.username==this.password){
    //   this.result="Success";
    //   this.resultStyle="alert alert-success";
    // }else{
    //   this.result="Failure";
    //   this.resultStyle="alert alert-danger";
    // }
    //we have commented the above code
    //because, this is done by parent
    
    var user:User=new User(this.username, this.password);
    // user.username=this.username;
    // user.password=this.password;
    this.loginEvent.emit(user);
  }
}
