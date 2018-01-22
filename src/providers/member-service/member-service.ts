import { Member } from './../../models/member.interface';
import { Http, Response } from '@angular/http';
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

  constructor(private db: AngularFireDatabase) {
    console.log('Hello MemberServiceProvider Provider');
  }

  private membersList = this.db.list<Member>("MembersList");

  SaveMember(member: Member, userFirebase: boolean = false): string {

    if (userFirebase) {

      this.membersList.push(member).then(ref=> {console.log(ref.Key)
      });
    }
    else {
      
      // let headers = new Headers();
      // headers.append('Content-Type', 'application/json');

      // this.http.post('www.', JSON.stringify(member), )
      //   .map(res => res.json())
      //   .subscribe(data => {
      //     console.log(data);
      //   });

    }

    return "Success";
  }
}
