import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser:string;
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  loggedIn(){
   this.loggedInUser = localStorage.getItem('token');
   return this.loggedInUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.toastr.success('You are logged out !');
  }

}
