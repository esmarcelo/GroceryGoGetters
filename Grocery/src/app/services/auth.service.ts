import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { last } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit {

  constructor(private http: HttpClient) { }

  // Logging
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

  // User Identifiers
  setUserId(id) {
    localStorage.setItem('id', id);
  }

  getId() {
    return localStorage.getItem('id');
  }

  setRole(role) {
    localStorage.setItem('role', role );
  }

  setFirstname(firstname){
    localStorage.setItem('firstname',firstname)
  }

  setLastname(lastname){
    localStorage.setItem('lastname', lastname)
  }

  setEmail(email){
    localStorage.setItem('email',email)
  }

  setAddres(address){
    localStorage.setItem('address',address)
  }

  setCity(city){
    localStorage.setItem('city',city)
  }

  setZipcode(zipcode){
    localStorage.setItem('zipcode',zipcode)
  }

  getFirstname(){
    return localStorage.getItem('firstname');
  }

  getLastname(){
    return localStorage.getItem('lastname');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  getAddres(){
    return localStorage.getItem('address');
  }

  getCity(){
   return localStorage.getItem('city');
  }

  getZipcode(){
   return localStorage.getItem('zipcode');
  }


  getRole() {
    return localStorage.getItem('role');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  // Is someone logged in
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isCustomer(): boolean {
    if (localStorage.getItem('role') === '2') {
      return true;
    }
    return false;

  }

  isDriver(): boolean {
    if (localStorage.getItem('role') === '3') {
      return true;
    }
    return false;

  }

  ngOnInit(): void {

  }
}

export const AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService }
];
