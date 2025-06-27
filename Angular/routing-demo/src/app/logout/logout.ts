import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout implements OnInit, OnChanges {
  ngOnInit(): void {
    localStorage.clear();
    console.log("logout on init");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("logout on changes");
    
  }

}
