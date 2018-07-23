import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const UPDATE_EMPLOYEE = '[EMPLOYEE] Update';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class UpdateEmployee implements Action {
  readonly type = UPDATE_EMPLOYEE;
  constructor(public payload: any) {}
}

export type Actions = AddEmployee | RemoveEmployee | UpdateEmployee;
