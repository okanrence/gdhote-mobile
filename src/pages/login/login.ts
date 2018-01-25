import { NotificationsProvider } from './../../providers/notifications/notifications';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service'
import { Events } from 'ionic-angular/util/events';


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
    private notificationCtrl: NotificationsProvider,
    private eventsCtrl: Events) {
  }

  username;
  password;
  isAdmin;

  LoginUser(): void {
    let loading = this.notificationCtrl.showLoading("..please wait..");

    loading.present().then(() => {
      this.loginCtrl.LoginUser(this.username, this.password)
        .subscribe(user => {
          console.log(user);
          if (user.errorCode == '00') {
            this.eventsCtrl.publish("user:login", user, Date.now());
            this.navCtrl.push('HomePage');
          }
          else {
            this.notificationCtrl.showToast(user.errorMessage, 5000, 'top')
              .then(() => this.password = "");
          }
        },

        error => {
          loading.dismiss();
          this.notificationCtrl.showAlert(error);

        },

        () => loading.dismiss());
    });
  }
}