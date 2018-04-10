import { Observable } from 'rxjs/Observable';
import { HttpMethod } from './../http-service/http-methods.enums';
import { endpoints } from './../endpoints';
import { Member } from './../../models/member.interface';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../http-service/http-service';
/*
  Generated class for the MemberServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberServiceProvider {

  constructor(private httpCtrl: HttpServiceProvider) {
    console.log('Hello MemberServiceProvider Provider');
  }


  SaveMember(member: Member): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + member._should_update ? endpoints.updateMember : endpoints.createMember 
   
    return this.httpCtrl.post(member, headers, url);
  }


  getMember(phone: string): Observable<any> {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.getMember + '?seachQuery=' + phone;
    return this.httpCtrl.get(headers, url);
  }
}
