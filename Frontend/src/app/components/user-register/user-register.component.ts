import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { UserForRegister } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: UserForRegister;
  userSubmitted: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createRegisterationForm();
    this.registrationForm.controls['userName'].setValue('default value');
  }

  createRegisterationForm() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchingValidator });
  }

  passwordMatchingValidator(ac: AbstractControl): Validators {
    return ac.get('password').value === ac.get('confirmPassword').value ? null :
      { notMatched: true };
  }

  get userName() {
    return this.registrationForm.get("userName") as FormControl
  }

  get email() {
    return this.registrationForm.get("email") as FormControl
  }

  get password() {
    return this.registrationForm.get("password") as FormControl
  }

  get confirmPassword() {
    return this.registrationForm.get("confirmPassword") as FormControl
  }

  get mobile() {
    return this.registrationForm.get("mobile") as FormControl
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.registrationForm.reset();
        this.toastr.success('Congrats, you are succesfully registered');
      }
      )
    }
  }

  userData(): UserForRegister {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: Number(this.mobile.value)
    }
  }


}
