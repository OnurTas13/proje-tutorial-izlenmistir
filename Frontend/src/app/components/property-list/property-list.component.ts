import { Component, OnInit } from '@angular/core';
import { property } from 'src/app/models/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<property> = [
    {
      Id: 1,
      SellRent:1,
      Name: "Bruce House",
      Type: "House",
      Price: 10000,
      Image:"prop-1"
    },
    {
      Id: 2,
      SellRent:1,
      Name: "Green House",
      Type: "House",
      Price: 12000,
      Image:"prop-2"
    },
    {
      Id: 3,
      SellRent:1,
      Name: "New York House",
      Type: "House",
      Price: 2000
    },
    {
      Id: 4,
      SellRent:1,
      Name: "Education House",
      Type: "House",
      Price: 7500,
      Image:"prop-4"
    },
    {
      Id: 5,
      SellRent:1,
      Name: "White House",
      Type: "House",
      Price: 650650,
      Image:"prop-5"
    },
    {
      Id: 6,
      SellRent:1,
      Name: "Dark House",
      Type: "House",
      Price: 65900,
      Image:"prop-6"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
