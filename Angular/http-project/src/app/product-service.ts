import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL='http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  fnAllProducts(){
    return this.http.get(this.URL);
  }

  fnFindById(id:string){
    return this.http.get(`${this.URL}/${id}`);
  }

  fnAddProduct(product:any){
    return this.http.post(this.URL, product);
  }

  fnUpdateProduct(product:any){
    return this.http.put(`${this.URL}/${product.id}`,product);
  }

  fnDeleteProduct(id:string){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
