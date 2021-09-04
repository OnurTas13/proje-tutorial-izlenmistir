import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addPropertyForm: FormGroup;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: string[] = ['House', 'Apartmen', 'Dublex'];
  furnishTypes: string[] = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: Property={
    id:null,
    sellRent:null,
    name:"",
    pType:"",
    fType:"",
    price:null,
    BHK:null,
    builtArea: null,
    city:null,
    RTM:null,
    description:""
  };


  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddPropertyForm()
  }

  createAddPropertyForm(){
    this.addPropertyForm=this.formBuilder.group({    
      basicInfo: this.formBuilder.group({
        sellRent:[null, Validators.required],
        pType:[null, Validators.required],
        name:[null, Validators.required]
      }),
      priceInfo:this.formBuilder.group({
        price:[null, Validators.required],
        builtArea:[null, Validators.required]
      })    
    });
  }

  onBack(){
    this.router.navigate([""]);
  }

  onSubmit(){
   console.log(this.addPropertyForm)
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
  }
  
}
