import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  constructor(private toastCtrl: ToastController) { }

  show(message: string, duration: number = 3000, position: string = 'top') {
    return this.toastCtrl.create({
      message : message,
      duration : duration,
      position: position
    }).present();
  }

}

