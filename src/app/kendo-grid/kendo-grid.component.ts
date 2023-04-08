import { Component, OnInit } from '@angular/core';
import {KendogridServiceService} from './kendogrid-service.service';


@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {

  constructor(private kendoGridService : KendogridServiceService) { }

  ngOnInit(): void {
  }

  // public gridData=[
  //   {
  //     'productid': 1,
  //     'productName': "rice",
  //     'productPrice': 18
  //   },
  //   {
  //     'productid': 2,
  //     'productName': "wheat",
  //     'productPrice': 20
  //   }
  // ]

  public gridData=this.kendoGridService.getGridData();

}
