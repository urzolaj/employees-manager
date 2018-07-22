import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {
    this.employees = store.select('employee');
  }

  ngOnInit() {}

}
