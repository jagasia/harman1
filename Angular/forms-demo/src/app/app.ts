import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forms-demo';
}
