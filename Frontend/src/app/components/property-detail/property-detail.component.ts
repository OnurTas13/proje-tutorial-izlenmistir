import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { CProperty } from 'src/app/models/classProperty';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  propertyId:number=0;
  propertyName:string="hop";
  property = new CProperty();

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private housingService: HousingService) { }

  ngOnInit(): void {
     
    this.galleryOptions = [
      {
        width: '800px',
        height: '520px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];

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
