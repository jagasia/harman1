import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './color.html',
  styleUrl: './color.css'
})
export class Color {
  red=0;
  green=255;
  blue=0;
  color='blue'
}
