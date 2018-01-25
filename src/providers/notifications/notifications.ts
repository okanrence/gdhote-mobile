import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    console.log('Hello NotificationsProvider Provider');
  }
  showToast(message: string, duration: number = 3000, position: string = 'top'): any {
    return this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    }).present();
  }

  showLoading(message: string, spinner: string = 'ios'): any {
    return this.loadingCtrl.create({
      content: message,
      spinner: spinner
    });
  }

  showAlert(message: string, title: string="Information", buttons:string[] = ['OK'] ): any {
    return this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttons
    });
  }
}
