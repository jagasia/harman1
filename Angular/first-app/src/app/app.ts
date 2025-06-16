import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Signin } from "./signin/signin";
import { User } from "./user";


@Component({
  selector: 'app-root',
  imports: [FormsModule, Signin],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';

  fnLogin(e:User){
    alert(JSON.stringify(e))
  }
}
