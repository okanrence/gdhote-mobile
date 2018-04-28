import { HttpMethod } from "./http-methods.enums";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { StorageServiceProvider } from "../../providers/storage-service/storage-service";
import { Observer } from "firebase/app";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  constructor(
    private http: Http,
    private storageCtrl: StorageServiceProvider
  ) {}

  post(
    params: any,
    headers: Headers = null,
    requestUrl: string
  ): Observable<any> {
    return Observable.fromPromise(
      this.storageCtrl.GetValue("access-token")
    ).mergeMap(token => {
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Authorization", "Bearer " + token);
      headers.append("channel", "2");
      headers.append("Content-Type", "application/json");

      let options = new RequestOptions({ headers: headers });

      return this.http.post(requestUrl, params, options).map(res => res.json());
    });
  }

  get(headers: Headers = null, requestUrl: string): Observable<any> {
    return Observable.fromPromise(
      this.storageCtrl.GetValue("access-token")
    ).mergeMap(token => {
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Authorization", "Bearer " + token);
      headers.append("channel", "2");
      headers.append("Content-Type", "application/json");

      let options = new RequestOptions({ headers: headers });

      return this.http.get(requestUrl, options).map(res => res.json());
    });
  }

  auth(params: any, headers: Headers = null, requestUrl: string): any {
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: headers });

    return this.http.post(requestUrl, params, options).map(res => res.json());
  }
}
