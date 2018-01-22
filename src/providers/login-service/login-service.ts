import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor() {
    console.log('Hello LoginServiceProvider Provider');
  }

  LoginUser(username: string, password: string): boolean {

    //Do back-end call here
    let loginResult: boolean = false;

    const inputOnlyUser: string = "user";
    const inputOnlyPwd: string = "user";

    const adminUser: string = "admin";
    const adminPassword: string = "admin"

    if (username == inputOnlyUser && password == inputOnlyPwd) {
      loginResult = true;
    } else if (username == adminUser && password == adminPassword) {
      loginResult = true;
    }
    else {
      loginResult = false;
    }

    return loginResult;
  }
}
