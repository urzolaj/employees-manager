import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';

const initialState: Employee = {
  name: 'Johann Garrido',
  dateOfBirth: new Date('August 20, 1989'),
  country: 'Colombia',
  username: 'alejohann',
  hiredDate: new Date('July 5, 2012'),
  status: true,
  area: 'kitchen',
  jobTitle: 'Chef',
  tipRate: 0.9
}

export function employeeReducer(state: Employee[] = [initialState], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    case EmployeeActions.REMOVE_EMPLOYEE:
      state.splice(state.indexOf(action.payload), 1);
      return state;
    case EmployeeActions.UPDATE_EMPLOYEE:
      state[action.payload.index] = Object.assign({}, action.payload.newValue);
      return state;
    default:
      return state;
  }
}
