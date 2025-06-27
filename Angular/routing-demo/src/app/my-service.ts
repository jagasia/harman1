import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  fnAdd(){
    return "Adding..."
  }

  fnUpdate(){
    return "Updating..";
  }
}
