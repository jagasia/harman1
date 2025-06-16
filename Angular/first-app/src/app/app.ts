import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Country } from "./country/country";


@Component({
  selector: 'app-root',
  imports: [FormsModule, Country],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
