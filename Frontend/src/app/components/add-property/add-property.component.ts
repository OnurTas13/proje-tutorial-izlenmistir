import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addPropertyForm: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddPropertyForm()
  }

  createAddPropertyForm(){
    this.addPropertyForm=this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(5)]],
      type:[null],
      price:[null, Validators.required]
    });
  }

  onBack(){
    this.router.navigate([""]);
  }

  onSubmit(){
   console.log(this.addPropertyForm)
  }
}
