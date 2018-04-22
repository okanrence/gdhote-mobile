import { DateObj } from './../../models/date.interface';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';
import { Member } from './../../models/member.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-member',
  templateUrl: 'register-member.html',
})
export class RegisterMemberPage {

  //TODO: Find a better way to do this date thing
  years: number[];
  days: number[];
  months: [{}];
  dateOfBirth: DateObj;
  magusDate: DateObj;;
  member: Member;

  maritalStatusList: any;
  constructor(private navCtrl: NavController,
    private notificationsCtrl: NotificationsServiceProvider,
    private commonCtrl: CommonServicesProvider
  ) {

    
    this.days = this.commonCtrl.GetDays();
    this.years = this.commonCtrl.GetYears();
    this.months = this.commonCtrl.GetMonths();
    this.maritalStatusList = this.commonCtrl.GetMaritalStatusList();
    this.dateOfBirth = new DateObj();
    this.magusDate = new DateObj();
    this.member = new Member();   
  }

  ionViewDidLoad() {
   

  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
      refresher.complete();
    }, 1000);
  }

  NextPage() {
    let loader: any = this.notificationsCtrl.showLoading("..please wait..");
    loader.present().then(() => {
      this.member.MagusDate = this.commonCtrl.GetDateString(this.magusDate)
      this.member.DateOfBirth = this.commonCtrl.GetDateString(this.dateOfBirth);
      this.member._should_update = false;
      console.log(JSON.stringify(this.member));
      this.navCtrl.push("ConfirmationPage", { member: this.member });

    });

    loader.dismiss();
  }

}

