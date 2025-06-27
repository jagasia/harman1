import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palette',
  imports: [NgStyle, FormsModule],
  templateUrl: './palette.html',
  styleUrl: './palette.css'
})
export class Palette {
  color:string='white';
  bgColor:string="yellow";
}
