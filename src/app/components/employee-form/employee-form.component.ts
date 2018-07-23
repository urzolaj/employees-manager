import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeesState } from '../../app.state';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from '../../actions/employee.actions';
import { EmployeeService } from '../../services/employee.service';
import { alphanumericValidator } from '../../core/form.validators'

const { compose, required } = Validators;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public employeeForm: FormGroup;
  private countries: Observable<Object[]>;
  public action = 'Add';
  private employeeIndex;
  public today = new Date();
  public validAdultDob = new Date();

  constructor(
    private store: Store<EmployeesState>,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', required],
      dateOfBirth: [null, required],
      country: [null, required],
      username: ['', compose([required, alphanumericValidator])],
      hiredDate: [null, required],
      status: [true, required],
      area: ['services', required],
      jobTitle: [null, required],
      tipRate: [0, required]
    });
    const urlParts = this.router.url.split('/');
    this.action = urlParts[1];
    if (this.action === 'view' || this.action === 'edit' && urlParts.length === 3) {
      this.route.params.subscribe(res => {
        this.employeeIndex = res.index;
        this.getEmployee();
      });
      if (this.action === 'view') {
        this.employeeForm.disable();
      }
    }
  }

  ngOnInit() {
    const validAdultYear = this.today.getFullYear() - 18;
    this.validAdultDob.setFullYear(validAdultYear);
    this.employeeForm.controls.area.valueChanges.subscribe(newChanges => {
      this.employeeForm.get('jobTitle').setValue(null);
    });
    this.countries = this.employeeService.getCountries();
  }

  getEmployee() {
    this.store.select('employee').subscribe(employeesResponse => {
      this.employeeForm.setValue(employeesResponse[this.employeeIndex]);
    });
  }

  addEmployee() {
    this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
    this.router.navigate(['/list']);
  }

  editEmployee() {
    this.store.dispatch(new EmployeeActions.UpdateEmployee(
      {
        newValue: this.employeeForm.value,
        index: this.employeeIndex
      }
    ));
    this.router.navigate(['/list']);
  }

  callEmployeeAction(index) {
    if (this.action === 'new') {
      this.addEmployee();
    }
    if (this.action === 'edit') {
      this.editEmployee();
    }
  }

  back() {
    this.router.navigate(['/list']);
  }

  get areaValue() { return this.employeeForm.get('area').value; }
  get jobTitleValue() { return this.employeeForm.get('jobTitle').value; }

}
