import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  isAdmin;
  userName;
  loginTime;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private eventsCtrl: Events) {
  }


  // ionViewDidLoad() {

  //   this.eventsCtrl.subscribe('user:created', (user, time) => {
  //     this.isAdmin = user.userName == "admin";
  //     this.userName = user.userName
  //     this.loginTime = time
  //     console.log("At home page" + JSON.stringify(user));
  //   });
  //}
  NavigateToPage(): void {
    this.navCtrl.push('AddMemberPage');
  }

}
