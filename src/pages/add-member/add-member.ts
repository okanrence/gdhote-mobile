import { Member } from './../../models/member.interface';
import { DatePicker } from '@ionic-native/date-picker';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
// import { DatePipe } from '@angular/common'
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

  constructor(private navCtrl: NavController,
              private datePicker: DatePicker,
              private toastCtrl: ToastController) {
  }
  // @ViewChild('addMemberSlider') addMemberSlider: any;

  member: Member = {
    Key: null,
    FirstName: "",
    LastName: "",
    MiddleName: "",
    Gender: "",
    DateOfBirth: null,
    IsInitiated: false,
    IsMagus: false,
    MagusDate: null,
    PhoneNumber : "",
    EmailAddress: ""
  };

  showDate(): void {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      maxDate : new Date(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => this.member.DateOfBirth = date.toString(),
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
      this.member.PhoneNumber = "";
      this.member.EmailAddress = "";
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

