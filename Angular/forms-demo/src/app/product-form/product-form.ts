import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  // product:Product={id:0, name:'',category:'',price:0};
  product:Product=new Product(0,'','',0);
  errors:any={};

  fnValidateId(){
    console.log('validating id');
    
    //must be 3 digit positive number
    if(this.product.id<100){
      this.errors.id='Product Id must be 3 digit number';
    }else{
      this.errors.id='';
    }
  }
}
