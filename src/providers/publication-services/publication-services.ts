import { Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpServiceProvider } from "../http-service/http-service";
import { HttpMethod } from "./../http-service/http-methods.enums";
import { endpoints } from "./../endpoints";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the PublicationServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicationServicesProvider {
  constructor(private httpCtrl: HttpServiceProvider) {
    console.log("Hello PublicationServicesProvider Provider");
  }

  getCategories(): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.getPublicationCategories;
    return this.httpCtrl.get(headers, url);
  }
}
