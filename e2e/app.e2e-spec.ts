import { EmployeesManagerPage } from './app.po';

describe('employees-manager App', () => {
  let page: EmployeesManagerPage;

  beforeEach(() => {
    page = new EmployeesManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
