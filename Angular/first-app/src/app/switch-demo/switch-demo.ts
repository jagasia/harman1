import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-demo',
  imports: [FormsModule,CommonModule],
  templateUrl: './switch-demo.html',
  styleUrl: './switch-demo.css'
})
export class SwitchDemo {
  grade:string='A';
}
