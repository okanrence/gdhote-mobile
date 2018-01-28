import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  constructor(private navCtrl: NavController, private notificationCtrl: NotificationsServiceProvider) {
  }



  NavigateToPage(page:string): void {
    this.navCtrl.push(page);
  }

  ShowComingSoon(): void{
    this.notificationCtrl.showToast("Keep Calm, Coming Soon", 5000, "bottom");
  }

}
