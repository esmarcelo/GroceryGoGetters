import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isDriver(){
    return this.authService.isDriver();
  }

}
