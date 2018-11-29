import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/orders/'
     + this.authService.getId()).subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
      for ( let i = 0; i < this.orders.length; i++) {
        console.log(this.orders);
      }
    });
  }
}
