import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { UserForLogin, UserForLoginRes } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm:FormGroup;
  userForLogin:UserForLogin;
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
    this.authService.authUser(this.userForLoginData()).subscribe(
      //@ts-ignore
      (response : UserForLoginRes) => {
        console.log(response);
        const user = response;
        localStorage.setItem('token',user.token);
        localStorage.setItem('userName',user.userName);
        this.toastr.success('login successful');
        this.router.navigate(['/']);
      }
    );
  }

  loginModelData():LoginModel{
    return this.loginModel = {
      name: this.name.value,
      password: this.password.value
    }
  }

  userForLoginData():UserForLogin{
      return this.userForLogin = {
        userName: this.name.value,
        password: this.password.value
      }
  }



}
