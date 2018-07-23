import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from  'moment';

import { Employee } from '../../models/employee.model';
import * as EmployeeActions from '../../actions/employee.actions';
import { EmployeesState } from '../../app.state';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name', 'age', 'username', 'hiredDate', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private store: Store<EmployeesState>, private router: Router) {
    this.employees = store.select('employee');
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  employeeAge(dob) {
    return moment().diff(moment(dob), 'years');
  }

  formatDate(date) {
    return moment(date).format('YYYY/MM/DD');
  }

  getEmployees() {
    this.employees.subscribe(employees => {
      this.dataSource = new MatTableDataSource(employees);
    });
  }

  editEmployee(index) {
    this.router.navigate(['/edit/' + index]);
  }

  viewEmployee(index) {
    this.router.navigate(['/view/' + index]);
  }

  newEmployee() {
    this.router.navigate(['/new']);
  }

  deleteEmployee(employee) {
    this.store.dispatch(new EmployeeActions.RemoveEmployee(employee));
    this.getEmployees();
  }

}
