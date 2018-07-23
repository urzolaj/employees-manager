import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'list',
    component: EmployeesListComponent
  },
  {
    path: 'new',
    component: EmployeeFormComponent
  },
  {
    path: 'edit/:index',
    component: EmployeeFormComponent
  },
  {
    path: 'view/:index',
    component: EmployeeFormComponent
  },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { };
