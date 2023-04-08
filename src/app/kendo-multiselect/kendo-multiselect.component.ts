import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-multiselect',
  templateUrl: './kendo-multiselect.component.html',
  styleUrls: ['./kendo-multiselect.component.css']
})



export class KendoMultiselectComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  // public colorListmulti=['red','green','blue'];
  //public selectedValuemulti=['red'];

  public colorListmulti:Array<Item> =[
    {"text":"red","value" : "1" },
    {"text":"green","value" : "2" },
    {"text":"blue","value" : "3" }
  ];

  //public selectedValuemulti: Item[] = [this.colorListmulti[0]];//default value
  public selectedValuemulti: Item[] = [];

}

interface Item {
  text: string;
  value: string;
}
