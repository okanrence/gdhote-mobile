import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpServiceProvider } from "../http-service/http-service";
import { Observable } from "rxjs/Observable";
import { HttpMethod } from "./../http-service/http-methods.enums";
import { endpoints } from "./../endpoints";
import { Headers } from "@angular/http";

/*
  Generated class for the PaymentServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentServicesProvider {
  constructor(public httpCtrl: HttpServiceProvider) {}

  GetPaymentTypes(): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.getPaymentTypes;
    return this.httpCtrl.get(headers, url);
  }

  GetPaymentModes(): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.getPaymentModes;
    return this.httpCtrl.get(headers, url);
  }

  GetCurrencies(): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.getCurrencies;
    return this.httpCtrl.get(headers, url);
  }
}
