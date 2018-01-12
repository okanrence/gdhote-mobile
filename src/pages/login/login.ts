import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
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
    private toastCtrl: ToastController) {
  }
  username;
  password;
  LoginUser(): void {

    let response = this.loginCtrl.LoginUser(this.username, this.password);

    if (response) {
      this.navCtrl.push('HomePage');
    } else {
      this.showToast("Invalid Username/Password");
      this.password = "";
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'bottom'
    }).present();
  }
}