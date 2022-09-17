import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import 'rxjs/add/operator/map';
import { userInfo } from 'os';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + "/users/authenticate", {username: username, password: password}).map(user=>{
      if(user && user.token){
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
