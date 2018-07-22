import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { employeeReducer } from './reducers/employee.reducer';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      employee: employeeReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
