import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-form',
  imports: [JsonPipe, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {
  employee:Employee=new Employee();

}
