import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../endpoints';
import { HttpServiceProvider } from '../http-service/http-service';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(private httpCtrl: HttpServiceProvider) {
    console.log('Hello LoginServiceProvider Provider');
  }

  LoginUser(username: string, password: string): any {
    var headers = new Headers();
    headers.append('user_type', 'administrator');

    let body =  "username=" + username + "&password=" + password + "&grant_type=" + 'password';
 
    let url = endpoints.baseUrl + endpoints.auth;
    return this.httpCtrl.auth(body, headers, url);
  }
}
