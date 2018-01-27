import { HttpMethod } from './../http-service/http-methods.enums';
import { endpoints } from './../endpoints';
import { Member } from './../../models/member.interface';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpServiceProvider } from '../http-service/http-service';
/*
  Generated class for the MemberServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberServiceProvider {

  constructor(private db: AngularFireDatabase, private httpCtrl: HttpServiceProvider) {
    console.log('Hello MemberServiceProvider Provider');
  }

  // private membersList = this.db.list<Member>("MembersList");

  SaveMember(member: Member): any {
    var headers = new Headers();
    let url = endpoints.baseUrl + endpoints.createMember
    return this.httpCtrl.SendHttpRequest(member, headers, url, HttpMethod.POST);
  }
}
