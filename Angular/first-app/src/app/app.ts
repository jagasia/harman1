import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SwitchDemo } from "./switch-demo/switch-demo";


@Component({
  selector: 'app-root',
  imports: [FormsModule, SwitchDemo],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
