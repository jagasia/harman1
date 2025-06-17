import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  user:any;

  constructor(private fb:FormBuilder){
    this.user=fb.group({
      username:[''],
      password:[''],
      cpassword:[''],
      email:[''],
      phone:['']
    });
  }
}
