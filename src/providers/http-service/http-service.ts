
import { HttpMethod } from './http-methods.enums';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  constructor(public http: Http) {

  }


  SendHttpRequest(params: any, headers: Headers = null, reqestUrl: string, httpMethod: HttpMethod = HttpMethod.GET): any {

    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
  //  headers.append('channel', '2');

    let options = new RequestOptions({ headers: headers });

    var createRequest: any;

    if (httpMethod == HttpMethod.GET) {
      createRequest = this.http.get(reqestUrl, options);
    } else if (httpMethod == HttpMethod.POST) {
      createRequest = this.http.post(reqestUrl, params, options);
    }
    return createRequest.map(res => res.json());
  }
}
