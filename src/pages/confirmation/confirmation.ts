import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { Member } from './../../models/member.interface';


/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController ) {
  }

  navMember = this.navParams.get('member');

  member: Member = {
    FirstName: this.navMember.FirstName,
    LastName: this.navMember.LastName,
    MiddleName: this.navMember.MiddleName,
    Gender: this.navMember.Gender,
    DateOfBirth: this.navMember.DateOfBirth,
    IsInitiated: this.navMember.IsInitiated,
    IsMagus: this.navMember.IsMagus,
    MagusDate: this.navMember.MagusDate,
  };

  Back(): void {
    this.navCtrl.pop();
  }

  showAlert(message:string) {
    this.alertCtrl.create({
      title: 'Save',
      subTitle: message,
      buttons: ['OK']
    }).present();
    // alert.present();
  }
  SaveMember(member: Member): void {
    let loader = this.loadingCtrl.create({
      content: "Saving, please wait...",
       duration: 3000, spinner : 'ios'
    });
    loader.present().then(() => { 
      //Call backend service here
      console.log(JSON.stringify(member));
      this.showAlert('Your details have been saved successfully');
      this.navCtrl.push("AddMemberPage");
  
  });
    loader.dismiss();
  }

}


