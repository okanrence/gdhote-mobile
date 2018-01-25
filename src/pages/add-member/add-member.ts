import { NotificationsProvider } from './../../providers/notifications/notifications';
import { Member } from './../../models/member.interface';
// import { DatePicker } from '@ionic-native/date-picker';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

// import { ModalController } from 'ionic-angular';


/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {

  dob_year: number;
  yearList: number[];
  daysList: number[];
  dob_day: number;
  dob_month: string = "";

  magus_year: number;
  magus_day: number;
  magus_month: string = "";
  // magus_yearList: number[];
  // magus_daysList: number[];

  member = new Member(0);
  constructor(private navCtrl: NavController,
    private notificationsCtrl: NotificationsProvider) {
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
      if (this.member.magusFlag) {
        this.member.magusDate = `${this.magus_day.toString()}-${this.magus_month}-${this.magus_year.toString()}`
      } else {
        this.member.magusDate = null;
      }
      this.member.dateOfBirth = `${this.dob_day.toString()}-${this.dob_month}-${this.dob_year.toString()}`
      this.navCtrl.push("ConfirmationPage", { member: this.member });
    });

    loader.dismiss();
  }
}

