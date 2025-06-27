import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
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
      phone:['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      },{
        validators: this.confirmPasswordMatch
      });
  }
  get f(){
    return this.user.controls;
  }

  confirmPasswordMatch(control:AbstractControl):ValidationErrors|null
  {
    var pwd=control.get('password')?.value;    
    var cpwd=control.get('cpassword')?.value;
    if(pwd!==cpwd){
      return {'passwordMismatch':true};
    }
    return null;
  }
}
