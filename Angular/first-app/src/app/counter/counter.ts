import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [DatePipe],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  title:string="Hello this is counter";
  today:Date=new Date();
  score:number=100;
}
