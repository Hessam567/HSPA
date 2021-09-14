import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }
loggedInUser:string;
  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser=localStorage.getItem('Token');
    return this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('Token');
    this.alertify.Warning("شما از سیستم خارج شدید ")
  }
}
