import { ToastServiceProvider } from './../../providers/toast-service/toast-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service'
import { Duration } from '../../providers/login-service/toast-enums';


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
    private toastService: ToastServiceProvider) {
  }
  username;
  password;
  LoginUser(): void {

    let response = this.loginCtrl.LoginUser(this.username, this.password);
    if (response) {
      let isAdmin = this.username == "admin";
      this.navCtrl.push('HomePage', { isAdmin: isAdmin });
    } else {
      this.toastService.show("Invalid Username/Password", 5000, 'top');
      this.password = "";
    }
  }
}