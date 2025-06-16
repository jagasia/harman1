import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Maths } from "./maths/maths";


@Component({
  selector: 'app-root',
  imports: [FormsModule, Maths],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
