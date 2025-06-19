import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./product/product";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'http-project';
}
