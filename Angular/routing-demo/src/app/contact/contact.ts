import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  cname:string|null='';
  constructor(private route:ActivatedRoute){

  }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cname = params.get('cname');
    });
  }
}
