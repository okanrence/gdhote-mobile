import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicationServicesProvider } from '../../providers/publication-services/publication-services';
import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';

/**
 * Generated class for the PublicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
})
export class PublicationsPage {
categories: any;

  constructor(private categoriesCtrl: PublicationServicesProvider, private notificationsCtrl: NotificationsServiceProvider) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PublicationsPage');
    
    this.GetCategories();
   

   // loading.dismiss();
  }
 
  GetCategories(){

    let loading = this.notificationsCtrl.showLoading("..please wait..");

    loading.present().then(() => {
    this.categoriesCtrl.getCategories()
        .subscribe(res => {
          console.log(res);
          this.categories = res;
          
          // else{
          // this.notificationCtrl.showAlert(res.ErrorMessage);
          // }
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error))
          this.notificationsCtrl.showAlert(error);
        },

        () => loading.dismiss()
      
      )
   });
  }
}
