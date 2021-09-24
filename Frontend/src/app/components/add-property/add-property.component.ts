import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { CProperty } from 'src/app/models/classProperty';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addPropertyForm: FormGroup;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  nextClicked: boolean;
  property = new CProperty();
  cityList : string[];

  propertyTypes: string[] = ['House', 'Apartmen', 'Dublex'];
  furnishTypes: string[] = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: Property = {
    id: null,
    sellRent: null,
    name: "",
    pType: "",
    fType: "",
    price: null,
    BHK: null,
    builtArea: null,
    city: null,
    RTM: null,
    description: ""
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private housingService: HousingService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
    this.housingService.getAllCity().subscribe(data => {this.cityList=data;
    console.log(this.cityList)})

  }

  createAddPropertyForm() {
    this.addPropertyForm = this.formBuilder.group({

      basicInfo: this.formBuilder.group({
        sellRent: [1, Validators.required],
        BHK: [null, Validators.required],
        pType: [null, Validators.required],
        fType: [null, Validators.required],
        name: [null, Validators.required],
        city: [null, Validators.required]
      }),

      priceInfo: this.formBuilder.group({
        price: [null, Validators.required],
        builtArea: [null, Validators.required],
        carpetArea: [null],
        security: [null],
        maintenance: [null]
      }),

      addressInfo: this.formBuilder.group({
        floorNo: [null],
        totalFloor: [null],
        address: [null, Validators.required],
        landMark: [null],
      }),

      otherInfo: this.formBuilder.group({
        RTM: [null, Validators.required],
        possessionOn: [null, Validators.required],
        AOP: [null],
        gated: [null],
        mainEntrance: [null],
        description: [null]
      })

    });
  }
  //#region Getters
  
  //#region basicInfo
  get basicInfo() {
    return this.addPropertyForm.controls.basicInfo as FormGroup;
  }
  get sellRent() {
    return this.basicInfo.controls.sellRent as FormControl;
  }
  get BHK() {
    return this.basicInfo.controls.BHK as FormControl;
  }
  get pType() {
    return this.basicInfo.controls.pType as FormControl;
  }
  get fType() {
    return this.basicInfo.controls.fType as FormControl;
  }
  get name() {
    return this.basicInfo.controls.name as FormControl;
  }
  get city() {
    return this.basicInfo.controls.city as FormControl;
  }
  //#endregion

  //#region priceInfo
  get priceInfo() {
    return this.addPropertyForm.controls.priceInfo as FormGroup;
  }
  get price() {
    return this.priceInfo.controls.price as FormControl;
  }
  get builtArea() {
    return this.priceInfo.controls.builtArea as FormControl;
  }
  get carpetArea() {
    return this.priceInfo.controls.carpetArea as FormControl;
  }
  get security() {
    return this.priceInfo.controls.security as FormControl;
  }
  get maintenance() {
    return this.priceInfo.controls.maintenance as FormControl;
  }
  //#endregion

  //#region addresInfo
  get addressInfo() {
    return this.addPropertyForm.controls.addressInfo as FormGroup;
  }
  get floorNo() {
    return this.addressInfo.controls.floorNo as FormControl;
  }
  get totalFloor() {
    return this.addressInfo.controls.totalFloor as FormControl;
  }
  get address() {
    return this.addressInfo.controls.address as FormControl;
  }
  get landMark() {
    return this.addressInfo.controls.landMark as FormControl;
  }
  //#endregion

  //#region otherInfo
  get otherInfo() {
    return this.addPropertyForm.controls.otherInfo as FormGroup;
  }
  get RTM() {
    return this.otherInfo.controls.RTM as FormControl;
  }
  get possessionOn() {
    return this.otherInfo.controls.possessionOn as FormControl;
  }
  get AOP() {
    return this.otherInfo.controls.AOP as FormControl;
  }
  get gated() {
    return this.otherInfo.controls.gated as FormControl;
  }
  get mainEntrance() {
    return this.otherInfo.controls.mainEntrance as FormControl;
  }
  get description() {
    return this.otherInfo.controls.description as FormControl;
  }
  //#endregion

  //#endregion


  onBack() {
    this.router.navigate([""]);
  }

  allTabsValid():boolean{
    if (this.basicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.priceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.addressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.otherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

  onSubmit() {
    this.nextClicked=true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.toastrService.success('Congrats, your property listed succeffully on our website');
      console.log(this.addPropertyForm);

      if (this.sellRent.value == '2') {
        this.router.navigate(['/rent-property']);
      }
      else{
        this.router.navigate(['/']);
      }

    } else {
      this.toastrService.error('Please review the form and provide all valid entries');
    }
    
  }

  selectTab(tabId: number, isCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (isCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
      this.nextClicked = false;
    }
  }

  mapProperty():void{
    this.property.id= this.housingService.newPropID();
    this.property.sellRent = +this.sellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.pType = this.pType.value;
    this.property.name = this.name.value;
    this.property.city = this.city.value;
    this.property.fType = this.fType.value;
    this.property.price = this.price.value;
    this.property.security = this.security.value;
    this.property.maintenance = this.maintenance.value;
    this.property.builtArea = this.builtArea.value;
    this.property.carpetArea = this.carpetArea.value;
    this.property.floorNo = this.floorNo.value;
    this.property.totalFloor = this.totalFloor.value;
    this.property.address = this.address.value;
    this.property.address2 = this.landMark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.gated = this.gated.value;
    this.property.mainEntrance = this.mainEntrance.value;
    this.property.possession = this.possessionOn.value;
    this.property.description = this.description.value;
    this.property.postedOn = new Date().toString();
  }

}
