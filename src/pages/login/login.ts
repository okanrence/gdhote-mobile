import { NotificationsServiceProvider } from "./../../providers/notifications-service/notifications-service";

import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { LoginServiceProvider } from "../../providers/login-service/login-service";
import { StorageServiceProvider } from "../../providers/storage-service/storage-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public username: string;
  public password: string;
  public isAdmin: string;

  constructor(
    private navCtrl: NavController,
    private loginCtrl: LoginServiceProvider,
    private notificationCtrl: NotificationsServiceProvider,
    private storageCtrl: StorageServiceProvider
  ) {
    this.storageCtrl.GetValue("user-name").then(val => {
      this.username = val;
      console.log("Got user name at login contructor " + this.username);
    });
  }

  // LoginUser(): void {
  //   let loading = this.notificationCtrl.showLoading("..please wait..");
  //   loading.present().then(()=>  this.navCtrl.push('HomePage') );
  //   loading.dismiss();
  // }
  LoginUser(): void {
    let loading = this.notificationCtrl.showLoading("..please wait..");

    loading.present().then(() => {
      this.loginCtrl.LoginUser(this.username, this.password).subscribe(
        res => {
          console.log(res);
          this.storageCtrl.SetValue("user-profile", JSON.stringify(res));
          this.storageCtrl.SetValue("token-object", res.userName);
          this.storageCtrl.SetValue("access-token", res.access_token);
          this.navCtrl.push("HomePage");
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error));
          this.notificationCtrl.showAlert(error);
        },

        () => loading.dismiss()
      );
    });
  }
}
