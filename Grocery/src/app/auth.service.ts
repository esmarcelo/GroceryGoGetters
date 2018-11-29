import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit {

  constructor(private http: HttpClient) { }

  login(user: string, password: string): boolean {
  if (user && password) {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  ngOnInit(): void {

  }
}

export const AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService }
];
