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
      id:[''],
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
    var product=this.productForm.value;
    console.log("We are updating the following product:");
    console.log(product);
    
    
    this.ps.fnUpdateProduct(product)
    .subscribe({
      next:value=>{
        console.log("Updated successfully");
        
      },
      error:err=>{
        console.log("Error while adding");
        console.log(err);
        
      }
    })
  }
  fnDelete(){
    var id=this.productForm.controls.id.value;
    console.log("We are deleting the following product id");
    console.log(id);
    
    
    this.ps.fnDeleteProduct(id)
    .subscribe({
      next:value=>{
        console.log("Deleted successfully");
        
      },
      error:err=>{
        console.log("Error while deleting");
        console.log(err);
        
      }
    })
  }

}
