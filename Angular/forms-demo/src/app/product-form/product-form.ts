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
}
