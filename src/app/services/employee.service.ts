import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Object[]> {
    return this.http.get<Object[]>('https://restcountries.eu/rest/v2/all');
  }
};
