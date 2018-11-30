import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/users')
      .subscribe(data => { console.log(data); this.data = data; }
    );
  }
}
