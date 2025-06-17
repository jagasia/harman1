import { Component } from '@angular/core';
import { Highlight } from './highlight';
import { ProductForm } from './product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [Highlight, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forms-demo';
}
