import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeForm } from "./employee-form/employee-form";
import { Highlight } from './highlight';
import { LengthPipe } from './length-pipe';
import { ProductForm } from './product-form/product-form';
import { Register } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [Highlight, ProductForm, EmployeeForm, CommonModule, LengthPipe, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'forms-demo';
  dt:Date=new Date();
}
