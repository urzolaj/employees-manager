import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTitlesDropdownComponent } from './employee-titles-dropdown.component';

describe('EmployeeTitlesDropdownComponent', () => {
  let component: EmployeeTitlesDropdownComponent;
  let fixture: ComponentFixture<EmployeeTitlesDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTitlesDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTitlesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
