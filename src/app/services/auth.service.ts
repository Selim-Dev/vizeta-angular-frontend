import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Doctor } from './../models/Doctor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // step #001
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    // step #002
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Step #004
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  // LOGIN
  login(data: any) {
    return this.http
      .post(`${environment.base_url}/users/login`, { ...data })
      .pipe(
        map((user: any) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', user.token);
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
  //Sign up
  signup(data: any): Observable<any> {
    return this.http.post(`${environment.base_url}/users/signup`, { ...data });
  }

  loggedIn() {
    return !!this.currentUserValue;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
