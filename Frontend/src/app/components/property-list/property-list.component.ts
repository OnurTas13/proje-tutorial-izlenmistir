import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<property> = [];

  constructor(private housingService: HousingService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties() {
    this.housingService.getAllProperties().subscribe(data => {
       this.properties = data; 
       console.log(data); 
       console.log(this.activatedRoute.snapshot.url.toString()) },
      error => {
        console.log(error);
      }
    );
  }



}
