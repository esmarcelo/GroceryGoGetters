import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  users;

  constructor(public authService: AuthService, private http: HttpClient) {
    this.message = '';
   }

  login(username: string, password: string) {
    this.message = '';
    if (!this.authService.isLoggedIn()) {
      this.message = 'Looking for you...';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 500);
      for (let i = 0; i < this.users.length; i++) {
        console.log(this.users[0].user_username);
        if (username === this.users[i].user_username && password === this.users[i].user_password) {
            this.authService.login(username, password);
            this.authService.setUserId(this.users[i].user_id);
            this.authService.setRole(this.users[i].role_id.role_id);
            this.authService.setFirstname(this.users[i].user_fname);
            this.authService.setLastname(this.users[i].user_lname);
            this.authService.setEmail(this.users[i].user_email);
            this.authService.setAddres(this.users[i].user_address);
            this.authService.setCity(this.users[i].user_city);
            this.authService.setZipcode(this.users[i].user_zipcode);
        }
      }
    }
    return false;
  }


  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
      this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/users').subscribe(data => {
      console.log(data);
      this.users = data;
      console.log(this.users);
      console.log(this.users[0]);
      for (let i = 0; i < this.users.length; i++) {
          console.log(this.users[i].user_username);
      }
  });
  }

}
