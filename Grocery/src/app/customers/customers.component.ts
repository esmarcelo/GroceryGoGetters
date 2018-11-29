import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private authService: AuthService) { }

  // call auth service to verify customer status
  isCustomer(): boolean {
    return this.authService.isCustomer();
  }

  ngOnInit() {
  }

}
