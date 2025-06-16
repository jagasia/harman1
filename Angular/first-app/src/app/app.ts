import { Component } from "@angular/core";
import { Palette } from "./palette/palette";

@Component({
  selector: 'app-root',
  imports: [Palette],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
