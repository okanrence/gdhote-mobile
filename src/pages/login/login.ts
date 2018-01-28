import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
    private loginCtrl: LoginServiceProvider,
    private notificationCtrl: NotificationsServiceProvider,
   ) {
  }

  username;
  password;
  isAdmin;

  LoginUser(): void {
    let loading = this.notificationCtrl.showLoading("..please wait..");

    loading.present().then(() => {
      this.loginCtrl.LoginUser(this.username, this.password)
        .subscribe(res => {
          console.log(res);
          if (res.errorCode == '00') {
            this.navCtrl.push('HomePage');
          }
          else {
            this.notificationCtrl.showToast(res.errorMessage, 5000, 'top')
              .then(() => this.password = "");
          }
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error))
          this.notificationCtrl.showAlert(error);
        },

        () => loading.dismiss());
    });
  }
}