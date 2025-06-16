import { Component } from "@angular/core";
import { Counter } from "./counter/counter";
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [Counter, Login],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
