import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  product:any;  
  products:any;
  constructor(private route:ActivatedRoute, private ps:ProductService){

  }

    ngOnInit() {
        const id = this.route.snapshot.queryParamMap.get('id');
      console.log(this.route.snapshot.queryParamMap);
      this.product=this.route.snapshot.queryParamMap;

      //call service api
      this.ps.fnAllProducts()
      .subscribe((response)=>{
        console.log(response);
        this.products=response;
      })
  }

}
