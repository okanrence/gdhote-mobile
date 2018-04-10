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
  yearList: number[];
  daysList: number[];

  dob_year: number;
  dob_day: number;
  dob_month: string = "";

  magus_year: number;
  magus_day: number;
  magus_month: string = "";

  member = new Member();
  constructor(private navCtrl: NavController,
    private notificationsCtrl: NotificationsServiceProvider,
    private commonCtrl: CommonServicesProvider
  )
  {
    this.populateDateList();
  }

  populateDateList(): void {
    this.yearList = [];
    this.daysList = [];

    let i = new Date().getFullYear() + 1;

    while (i-- && i >= 1904) {
      this.yearList.push(i);
    }

    for (let j = 1; j <= 31; j++) {
      this.daysList.push(j);
    }
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
      this.member.MagusDate = `${this.commonCtrl.IsNullValue(this.magus_day) ? "01" : this.magus_day.toString()}-${this.magus_month == "" ? "Jan" : this.magus_month}-${this.commonCtrl.IsNullValue(this.magus_year) ? "1900" : this.magus_year.toString()}`;
      this.member.DateOfBirth = `${this.dob_day.toString()}-${this.dob_month}-${this.dob_year.toString()}`
      this.member._should_update = false;
     console.log(JSON.stringify(this.member));
      this.navCtrl.push("ConfirmationPage", { member: this.member });

    });

    loader.dismiss();
  }


}

