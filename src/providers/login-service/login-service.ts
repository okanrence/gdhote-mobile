//import { HttpClient } from '@angular/common/http';
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

    let userpwd: string = "admin";

    if (username == userpwd && password == userpwd) {
      loginResult = true;
    }
    else {
      loginResult = false;
    }

    return loginResult;
  }
}
