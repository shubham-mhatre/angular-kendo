import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KendogridServiceService {

  constructor() { }

  getGridData(){
    return [
      {
        'productid': 1,
        'productName': "rice",
        'productPrice': 18
      },
      {
        'productid': 2,
        'productName': "wheat",
        'productPrice': 20
      },
      {
        'productid': 3,
        'productName': "sugar",
        'productPrice': 30
      },
      {
        'productid': 4,
        'productName': "watch",
        'productPrice': 100
      },
      {
        'productid': 5,
        'productName': "wheat",
        'productPrice': 15
      },
      {
        'productid': 6,
        'productName': "service",
        'productPrice': 2000
      },
      {
        'productid': 7,
        'productName': "earphone",
        'productPrice': 3500
      },
      {
        'productid': 8,
        'productName': "rice",
        'productPrice': 20
      },
      {
        'productid': 9,
        'productName': "wheat",
        'productPrice': 25
      },
      {
        'productid': 10,
        'productName': "wheat-temp",
        'productPrice': 30
      },
      {
        'productid': 11,
        'productName': "wheat-temp-1",
        'productPrice': 50
      }
    ]
  }
}
