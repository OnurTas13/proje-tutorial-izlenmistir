import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { CProperty } from 'src/app/models/classProperty';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  propertyId:number=0;
  propertyName:string="hop";
  property = new CProperty();

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private housingService: HousingService) { }

  ngOnInit(): void {
    this.propertyId = +this.activatedRoute.snapshot.params.id;
    
    this.activatedRoute.data.subscribe(
      (data) => { 
        this.property = data['pdrs']
      }
    );
    
    // this.activatedRoute.params.subscribe((params) => {
    //   this.propertyId = +params["id"] 
    //   this.housingService.getProperty(this.propertyId).subscribe( 
    //     (data) =>{
    //       this.property = data
    //     }, error => this.router.navigate(['/'])
    //   )
    // });
  
  }





  

}
