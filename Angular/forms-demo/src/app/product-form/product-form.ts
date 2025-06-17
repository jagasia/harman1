import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagePipe } from '../message-pipe';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, JsonPipe, CommonModule, MessagePipe],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  // product:Product={id:0, name:'',category:'',price:0};
  product:Product=new Product(0,'','',0);
  errors:any={id:'', name:'', category:'', price:''};
  touched:any={id:false, name:false, category:false, price:false};
  invalid:boolean=true;

  fnValidateId(){
    this.touched.id=true;
    console.log('validating id');
    
    //must be 3 digit positive number
    if(this.product.id<100){
      this.errors.id='Product Id must be 3 digit number';
    }else{
      this.errors.id='';
    }
    this.fnCheckValid();
  }

  fnValidateName(){
    this.touched.name=true;
    var str=this.product.name;
    var errMsg='';
    if (!str) {
    errMsg= "String is required.";
  }

  if (!/^[A-Za-z]/.test(str)) {
    errMsg= "String must start with an alphabet.";
  }

  if (str.length < 6) {
    errMsg= "String must be at least 6 characters long.";
  }
  
  this.errors.name=errMsg;
  this.fnCheckValid();
  }
 
  fnValidateCategory(){
    this.touched.category=true;
    if(!this.product.category){
      this.errors.category="Category must be selected"
    }else{
      this.errors.category="";
    }
    this.fnCheckValid();
  }

  fnValidatePrice(){
    this.touched.price=true;
    if(this.product.price<1){
      this.errors.price="Price must be positive number"
    }else{
      this.errors.price="";
    }
    this.fnCheckValid();
  }

  fnCheckValid(){
    this.invalid=this.errors.id || this.errors.name || this.errors.category || this.errors.price || !this.touched.id || !this.touched.name ||!this.touched.category ||!this.touched.price;
  }
}
