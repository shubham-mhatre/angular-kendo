import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-textbox',
  templateUrl: './kendo-textbox.component.html',
  styleUrls: ['./kendo-textbox.component.css']
})
export class KendoTextboxComponent implements OnInit {

  public txt1:string="";
  public name:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
