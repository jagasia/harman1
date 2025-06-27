import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css'
})
export class LifeCycle implements OnChanges
 {
  @Input() color:string='';
  ngOnChanges(changes: SimpleChanges): void {
    // alert("onChange event occurred");
  }
  //how to handle onChange event?
}
