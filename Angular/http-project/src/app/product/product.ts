import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  products:any;
  productForm:any;
  constructor(private ps:ProductService, private fb:FormBuilder){
    this.productForm=this.fb.group({
      id:[0],
      title:[''],
      price:[0],
      description:[''],
      category:[''],
      image:['']
    });
  }
  ngOnInit(): void {
    this.ps.fnAllProducts()
    .subscribe({
      next:value=>{
        console.log(value);
        this.products=value;
      },
      error:err=>console.log(err),
      complete:()=>console.log('Completed')      
    })
  }

  fnAdd(){
    var product=this.productForm.value;
    console.log("We are adding the following product:");
    console.log(product);
    
    
    this.ps.fnAddProduct(product)
    .subscribe({
      next:value=>{
        console.log("Adding successfully");
        
      },
      error:err=>{
        console.log("Error while adding");
        console.log(err);
        
      }
    })
  }
  fnUpdate(){

  }
  fnDelete(){

  }

}
