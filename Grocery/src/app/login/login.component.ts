import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService) {
    this.message = '';
   }

  login(username: string, password: string) {
    this.message = '';
    if (!this.authService.isLoggedIn()) {
      this.message = 'Looking for you...';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 500);
      this.authService.login(username, password);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
