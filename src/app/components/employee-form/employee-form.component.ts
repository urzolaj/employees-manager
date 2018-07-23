import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../../app.state';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from '../../actions/employee.actions';
import { EmployeeService } from '../../services/employee.service';

const { required } = Validators;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public employeeForm: FormGroup;
  countries: Observable<Object[]>;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', required],
      dateOfBirth: [null, required],
      country: [null, required],
      username: ['', required],
      hiredDate: [null, required],
      status: [true, required],
      area: ['services', required],
      jobTitle: [null, required],
      tipRate: [0, required]
    });
  }

  addEmployee() {
    this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
  }

  ngOnInit() {
    this.employeeForm.controls.area.valueChanges
    .subscribe(newChanges => {
      this.employeeForm.get('jobTitle').setValue(null);
    });
    this.countries = this.employeeService.getCountries();
  }

  get areaValue() { return this.employeeForm.get('area').value; }
  get jobTitleValue() { return this.employeeForm.get('jobTitle').value; }

}
