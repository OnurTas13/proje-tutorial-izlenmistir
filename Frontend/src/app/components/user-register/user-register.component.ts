import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.createRegisterationForm()
  }

  createRegisterationForm() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },this.passwordMatchingValidator);
  }
  
  
  passwordMatchingValidator(fg: FormGroup): Validators {
      //@ts-ignore 
      return fg.get('password').value === fg.get('confirmPassword').value ? null :
        {notmatched: true};
 }

 onSubmit(){
   console.log(this.registrationForm);
 }


}
