import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Login } from "./login/login";


@Component({
  selector: 'app-root',
  imports: [FormsModule, Login],
  templateUrl: './app.html',
  // template:`Hi this is template`,
  styleUrl: './app.css'
  // styleUrls:[]
  
})
export class App {
  protected title = 'first-app';
}
