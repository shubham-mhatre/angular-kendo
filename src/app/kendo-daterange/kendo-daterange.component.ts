import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-daterange',
  templateUrl: './kendo-daterange.component.html',
  styleUrls: ['./kendo-daterange.component.css']
})
export class KendoDaterangeComponent implements OnInit {

  constructor() { }

  public range:any = { start: null, end: null };

  changedd(e:Event){
    console.log(e);
  }

  ngOnInit(): void {
  }

}
