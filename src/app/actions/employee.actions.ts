import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;
  constructor(public payload: number) {}
}

export type Actions = AddEmployee | RemoveEmployee;
