import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient) { }


  submitFeedback(fb) {
    console.log(fb);
    this.http.post('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/createFeedBack', {
      'feedback_rating': null,
      'feedback_message': fb
    }).subscribe(feed => {
      console.log(feed);
    });
  }

  ngOnInit() {
  }

}
