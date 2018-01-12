import { Member } from './../../models/member.interface';
import { DatePicker } from '@ionic-native/date-picker';
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

  constructor(private navCtrl: NavController, private datePicker: DatePicker) {
  }
  // @ViewChild('addMemberSlider') addMemberSlider: any;

  member: Member = {
    FirstName: "",
    LastName: "",
    MiddleName: "",
    Gender: "",
    DateOfBirth: null,
    IsInitiated: false,
    IsMagus: false,
    MagusDate: null
  };

  showDate(): void {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
      );
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    setTimeout(() => {
      this.member.DateOfBirth = null;
      this.member.FirstName = "";
      this.member.Gender = "";
      this.member.IsInitiated = false;
      this.member.IsMagus = false;
      this.member.MiddleName = "";
      this.member.LastName = "";
      this.member.MagusDate = null;
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  NextPage() {
    this.navCtrl.push("ConfirmationPage", { member: this.member });
  }
}

