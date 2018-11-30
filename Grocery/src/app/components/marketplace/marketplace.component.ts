import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  datas;

  private productsUrl = 'http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/allProducts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.productsUrl)
      .subscribe(datas => this.datas = datas);
  }

}
