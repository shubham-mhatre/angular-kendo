import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-window',
  templateUrl: './kendo-window.component.html',
  styleUrls: ['./kendo-window.component.css']
})
export class KendoWindowComponent implements OnInit {
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
  }

}
