import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { employeeReducer } from './reducers/employee.reducer';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      employee: employeeReducer
    }),
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class AppModule { }
