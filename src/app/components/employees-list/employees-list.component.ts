import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { AppState } from '../../app.state';
import * as moment from  'moment';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name', 'age', 'username', 'hiredDate'];
  dataSource = new MatTableDataSource();

  constructor(private store: Store<AppState>) {
    this.employees = store.select('employee');
  }

  ngOnInit() {
    this.employees.subscribe(employees => {
      console.log('employees', employees);
      this.dataSource = new MatTableDataSource(employees);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  employeeAge(dob) {
    return moment().diff(moment(dob), 'years');
  }

  formatDate(date) {
    return moment(date).format('YYYY/MM/DD');
  }

}
