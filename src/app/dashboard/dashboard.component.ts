import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
  logout(){
    //removing token
    localStorage.removeItem("my-app-token");
    //go to login
    this.router.navigateByUrl("/login");
  }



}
