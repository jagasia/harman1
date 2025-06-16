import { Component } from "@angular/core";
import { Color } from "./color/color";

@Component({
  selector: 'app-root',
  imports: [Color],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
