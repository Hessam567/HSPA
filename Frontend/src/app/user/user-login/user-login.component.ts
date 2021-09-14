import { Router } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router:Router
  ) {}

  ngOnInit() {}

  onLogin(loginForm: NgModel) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('Token', token.userName);
      this.alertify.Success('login successful');
      this.router.navigate(['/']);
    } else {
      this.alertify.Failure('login not  successful');
    }
  }
}
