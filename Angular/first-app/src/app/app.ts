import { Component } from "@angular/core";
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
