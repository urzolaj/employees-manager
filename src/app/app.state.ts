import { Employee } from './models/employee.model';

export interface EmployeesState {
  readonly employee: Employee[];
}
