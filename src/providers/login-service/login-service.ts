import { HttpMethod } from './../http-service/http-methods.enums';
import { Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../endpoints';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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

    let loginCredentials = {
      username: username,
      password: password
    }
    
    let url = endpoints.baseUrl + endpoints.login
    return this.httpCtrl.SendHttpRequest(loginCredentials, headers, url, HttpMethod.POST);
  }
}
