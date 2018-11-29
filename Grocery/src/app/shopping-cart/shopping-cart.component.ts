import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.http.get('http://ec2-3-16-151-233.us-east-2.compute.amazonaws.com:8080/GroceryGoGetters/shoppingcarts/'
     + this.authService.getId()).subscribe(cart => {
      this.carts = cart;
    });
  }

}
