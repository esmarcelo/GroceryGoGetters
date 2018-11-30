import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  data;
  JSONdata: Data[];

  private addProductUrl = 'http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/createProduct';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  grabProduct(barcode: number) {
    this.http.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .subscribe(data => { console.log(data); this.data = data; }
    );

    // this.http.post(this.addProductUrl,
    //   {
    //   })
  }
}
