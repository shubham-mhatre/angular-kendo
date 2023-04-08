import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-dropdown',
  templateUrl: './kendo-dropdown.component.html',
  styleUrls: ['./kendo-dropdown.component.css']
})
export class KendoDropdownComponent implements OnInit {

  constructor() { }

  public colorList=[
    {"text":"red","value" : "1" },
    {"text":"green","value" : "2" },
    {"text":"blue","value" : "3" }
  ];
  public selectedValue={"text":"Please Select","value" : "-1" };

  ngOnInit(): void {
  }

}
