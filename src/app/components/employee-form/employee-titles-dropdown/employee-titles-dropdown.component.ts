import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-titles-dropdown',
  templateUrl: './employee-titles-dropdown.component.html',
  styleUrls: ['./employee-titles-dropdown.component.css']
})
export class EmployeeTitlesDropdownComponent implements OnInit, OnChanges {

  @Input() area: String;
  @Input() form: FormGroup;
  servicesTitles = [
    {id: 0, name: 'Manager'},
    {id: 1, name: 'Host'},
    {id: 2, name: 'Tuttofare'},
    {id: 3, name: 'Waitress'},
    {id: 4, name: 'Dining room manager'}
  ];
  kitchenTitles = [
    {id: 0, name: 'Chef'},
    {id: 1, name: 'Sous Chef'},
    {id: 2, name: 'Dishwasher'},
    {id: 3, name: 'Cook'}
  ];
  titles = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.area.currentValue === 'kitchen') {
      this.titles = this.kitchenTitles;
    } else {
      this.titles = this.servicesTitles;
    }
  }

}
