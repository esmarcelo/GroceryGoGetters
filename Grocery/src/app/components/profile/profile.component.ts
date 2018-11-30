import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private updateUrl = 'http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/userUpdate';
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  editProfile(first: string, last: string, email: string, username: string, add1: string,
    city: string, zipcode: string) {

    console.log(`${first} ${last} ${email} ${username} ${add1} ${city} ${zipcode}`);

    this.http.post(this.updateUrl,
      {
        'user_id': this.authService.getId(),
        'user_address': add1,
        'user_city': city,
        'user_email': email,
        'user_fname': first,
        'user_lname': last,
        'user_username': username,
        'user_zipcode': zipcode
      }
    )
    .subscribe();

  }

}
