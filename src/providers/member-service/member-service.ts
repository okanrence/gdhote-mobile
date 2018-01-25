import { endpoints } from './../endpoints';
import { Member } from './../../models/member.interface';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the MemberServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberServiceProvider {

  constructor(private db: AngularFireDatabase, private http: Http) {
    console.log('Hello MemberServiceProvider Provider');
  }

  private membersList = this.db.list<Member>("MembersList");

  SaveMember(member: Member): any {

    // if (userFirebase) {
    //   return this.membersList.push(member);
    // }
    // else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });

      let url = endpoints.baseUrl + endpoints.createMember

      return this.http.post(url, member, options)
        .map(res => res.json())
    // }
  }
}
