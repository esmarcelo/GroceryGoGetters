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
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }

  setUserId(id) {
    localStorage.setItem('id', id);
  }

  getId() {
    return localStorage.getItem('id');
  }

  setRole(role) {
    localStorage.setItem('role', role );
  }

  getRole() {
    return localStorage.getItem('role');
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
