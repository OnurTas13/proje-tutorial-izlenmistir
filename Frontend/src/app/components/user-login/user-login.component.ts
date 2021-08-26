import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm:FormGroup;
  loginModel:LoginModel;

  constructor(private formBuilder:FormBuilder, 
              private authService:AuthService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  get name() {
    return this.loginForm.get('name') as FormControl
  }

  get password() {
    return this.loginForm.get('password') as FormControl
  }
  
  onLogin(){
    const token = this.authService.authUser(this.loginModelData())  
    if (token) {
      localStorage.setItem('token', token.userName)
      this.toastr.success('login successful');
      this.router.navigate(['/']);
    }else{
      this.toastr.error('user id or password is wrong');
    }
  }

  loginModelData():LoginModel{
    return this.loginModel = {
      name: this.name.value,
      password: this.password.value
    }
  }



}
