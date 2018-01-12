import { Member } from './../../models/member.interface';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MemberServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MemberServiceProvider Provider');
  }

  SaveMember(member: Member): string {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    // this.http.post('www.', JSON.stringify(member), {headers: headers})
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    return "Success";
  }

}
