import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  constructor(private http: HttpClient) { }

  scheduleDelivery(del: string, freq: string, first: string, last: string,
    add: string, add2: string, ct: string, state: string, zip: number) {
    console.log('Delivery Scheduled for' + del + ' ' + freq
    + ' ' + first + ' ' + last + ' ' + add + ' ' + add2
    + ' ' + ct + ' ' + state + ' ' + zip);
  }

  ngOnInit() {
  }

}
