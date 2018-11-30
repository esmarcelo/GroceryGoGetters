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

  addItem(item) {
    console.log(item);
    this.http.post('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/createLineItem', {
    'litem_qty': 1,
    'product_id': {'product_id': item },
    'cart_id': { 'cart_id': 3}
    }).subscribe(data => {console.log(data); } );

  }

  ngOnInit() {
    this.http.get(this.productsUrl)
      .subscribe(datas => this.datas = datas);
  }

}
