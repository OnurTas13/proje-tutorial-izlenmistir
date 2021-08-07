import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Bruce House",
      "Type": "House",
      "Price": 10000
    },
    {
      "Id": 2,
      "Name": "Green House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "New York House",
      "Type": "House",
      "Price": 2000
    },
    {
      "Id": 4,
      "Name": "Education House",
      "Type": "House",
      "Price": 7500
    },
    {
      "Id": 5,
      "Name": "White House",
      "Type": "House",
      "Price": 650650
    },
    {
      "Id": 6,
      "Name": "Dark House",
      "Type": "House",
      "Price": 65900
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
