import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  recurrence;
  carts;
  cid;

  constructor(private http: HttpClient, private authService: AuthService) { }

  scheduleDelivery() {
    console.log('Delivery Scheduled');
    this.http.post('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/createEvent', {
      'cart_id': {'cart_id': this.cid },
      'event_created': '',
      'recur_id': {'recur_id': this.recurrence},
      'user_id': { 'user_id': this.authService.getId() }
    }).subscribe(res => {
      console.log(res);
    });
  }

  setValue(recurrence) {
    this.recurrence = recurrence;
    console.log(this.recurrence);
  }

  chooseCart(cid) {
    this.cid = cid;
    console.log(cid);
  }

  ngOnInit() {
      this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/shoppingcarts/'
     + this.authService.getId()).subscribe(cart => {
      this.carts = cart;
    });
  }

}
