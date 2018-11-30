import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService) { }
  

  editProfile(first: string, last: string, add1: string, add2: string, city: string, state: string, phone: string, zip: number) {
    console.log(first + ' ' + last + ' ' + add1 + ' ' + add2 + ' ' + city + ' ' + state + ' ' + phone + ' ' + zip);
  }
  ngOnInit() {
  }

}
