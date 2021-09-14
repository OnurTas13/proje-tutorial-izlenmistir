import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { CProperty } from 'src/app/models/classProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent: number = 1;
  properties: Array<CProperty> = [];

  constructor(private housingService: HousingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.getAllProperties(this.sellRent);
  }

  getAllProperties(sellRent?: number) {
  if (sellRent) {
    this.housingService.getAllProperties(sellRent).subscribe(data => {
      this.properties = data;

      console.log(data);

    }, error => {
      console.log("HttpError :");
      console.log(error);
    }
    )
  }else{
    this.housingService.getAllProperties().subscribe(data => {
      this.properties = data;
    })
  }
    
  }
}

  
  



