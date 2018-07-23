import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeTitlesDropdownComponent } from './employee-titles-dropdown/employee-titles-dropdown.component';
import { EmployeeService } from '../../services/employee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    FormBuilder,
    EmployeeService
  ],
  declarations: [
    EmployeeFormComponent,
    EmployeeTitlesDropdownComponent
  ],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormModule { };
