import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { LifeCycle } from './life-cycle/life-cycle';
import { Register } from './register/register';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [Hello, Register, LifeCycle, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'routing-demo';
  color:string='';
}
