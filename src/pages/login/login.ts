import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


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

  constructor(private navCtrl: NavController) {
  }
username;
password;
  LoginUser() : void{
    this.navCtrl.push('HomePage');
  }

}
