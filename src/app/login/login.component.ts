import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) { }
  public loginform: FormGroup = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    }
  )
  getLogin() {
    console.log(this.loginform.value);
    this.loginService.getLogin(this.loginform.value).subscribe(
      (data: any) => {
        //storing token
        localStorage.setItem("my-app-token",data.token);
        //go to dashboard
        this.router.navigateByUrl("/dashboard");
        alert("login successful");
      },
      (err: any) => {
        alert("login failed");
      }
    )
  }

}
