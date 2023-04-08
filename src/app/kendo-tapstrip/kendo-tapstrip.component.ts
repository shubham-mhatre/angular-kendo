import { Component, OnInit } from '@angular/core';

//import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-kendo-tapstrip',
  templateUrl: './kendo-tapstrip.component.html',
  styleUrls: ['./kendo-tapstrip.component.css']
})
export class KendoTapstripComponent implements OnInit {

  constructor() { }

  public selected = 1;
  public items = [
    {
      disabled: true,
      city: "Paris",
      temp: 17,
      weather: "rainy",
    },
    {
      disabled: false,
      city: "New York",
      temp: 29,
      weather: "sunny",
    },
    {
      disabled: false,
      city: "Sofia",
      temp: 23,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "London",
      temp: 19,
      weather: "cloudy",
    },
  ];

  public onTabSelect(e: any): void {
    console.log(e);
  }

  ngOnInit(): void {
  }

}
