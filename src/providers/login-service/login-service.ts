import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../endpoints';
import { analyzeAndValidateNgModules } from '@angular/compiler';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(private http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  LoginUser(username: string, password: string): any {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      username: username,
      password: password
    }

    let url = endpoints.baseUrl + endpoints.login

    return this.http.post(url, postParams, options)
      .map(res => res.json())
  }
}
