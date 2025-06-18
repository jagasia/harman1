import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  fnAllProducts(){
    return this.http.get(this.URL);  //returns Observable
  }
}
