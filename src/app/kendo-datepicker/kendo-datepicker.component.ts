import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-datepicker',
  templateUrl: './kendo-datepicker.component.html',
  styleUrls: ['./kendo-datepicker.component.css']
})
export class KendoDatepickerComponent implements OnInit {

  constructor() { }
  public valuetemp: Date = new Date(2000, 2, 10);

  ngOnInit(): void {
  }

}
