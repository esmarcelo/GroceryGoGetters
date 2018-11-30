import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drivers-delivered-orders',
  templateUrl: './drivers-delivered-orders.component.html',
  styleUrls: ['./drivers-delivered-orders.component.css']
})
export class DriversDeliveredOrdersComponent implements OnInit {
  dataDeliveredOrders;
  constructor(private http: HttpClient, private authservice: AuthService) { }

  ngOnInit() {
    this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/allDeliveredOrders')
    .subscribe(dataDeliveredOrders => {
      this.dataDeliveredOrders = dataDeliveredOrders;
    });
  }

  submitDelivered(orderid: any) {
    console.log(this.dataDeliveredOrders);
  }

}
