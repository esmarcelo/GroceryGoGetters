import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-driver-orders-list',
  templateUrl: './driver-orders-list.component.html',
  styleUrls: ['./driver-orders-list.component.css']
})
export class DriverOrdersListComponent implements OnInit {
  dataOrders;
  cartid;

  constructor(private http: HttpClient, private authservice: AuthService) { 
  }  

  submitorder(ordernumber: any){

    console.log(ordernumber);
  };

  ngOnInit() { 
    this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/driverorders/'+ this.authservice.getId()).subscribe(dataOrders => {
      console.log(dataOrders);
      this.dataOrders = dataOrders;
    });

   
  }

}
