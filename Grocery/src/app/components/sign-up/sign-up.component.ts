import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data;
  private createUrl = 'http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/createCustomer';
  show = false;
  showLogin = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  createCustomer(first: string, last: string, email: string, username: string, password: string,
    address: string, city: string, zipcode: string) {
    console.log(`${first} ${last} ${email} ${username} ${password} ${address} ${city} ${zipcode}`);
    if (first === '' || last === '' || email === '' || username === '' || password === '' ||
    address === '' || city === '' || zipcode === '') {
      console.log('null values');
      this.show = true;
    } else {
      console.log('account created succesfully');
      this.show = false;
      this.showLogin = true;
      this.http.post(this.createUrl,
        {
          'user_fname': first,
          'user_lname': last,
          'user_email': email,
          'user_username': username,
          'user_password': password,
          'user_address': address,
          'user_city': city,
          'user_zipcode': zipcode
        }
      )
      .subscribe(data => {console.log(data); this.data = data;} );
    }
  }
}
