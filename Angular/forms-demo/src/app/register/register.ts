import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
      username:['', Validators.required],
      password:['', [Validators.required]],
      cpassword:[''],
      email:['',[Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern('[0-9]{5}')]]
    });
  }
  get f(){
    return this.user.controls;
  }

}
