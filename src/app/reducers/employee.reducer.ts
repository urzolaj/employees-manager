import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';

const initialState: Employee = {
  name: 'Test Employee',
  dob: new Date(),
  country: 'Colombia',
  username: 'testuser',
  hiredDate: new Date(),
  status: true,
  area: 'BQ',
  jobTitle: 'Ing.',
  tipRate: 0.9
}

export function employeeReducer(state: Employee[] = [initialState], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
}
