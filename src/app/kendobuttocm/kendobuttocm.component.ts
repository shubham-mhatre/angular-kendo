import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendobuttocm',
  templateUrl: './kendobuttocm.component.html',
  styleUrls: ['./kendobuttocm.component.css']
})
export class KendobuttocmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonOnclick(){
    alert('hello');
  }

}
