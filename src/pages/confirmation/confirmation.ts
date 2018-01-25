import { NotificationsProvider } from './../../providers/notifications/notifications';
import { MemberServiceProvider } from './../../providers/member-service/member-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private notificationsCtrl: NotificationsProvider,
    private memberCtrl: MemberServiceProvider) {
  }

  navMember = this.navParams.get('member');

  member: Member = {
    Key: this.navMember.Key,
    firstName: this.navMember.firstName,
    surname: this.navMember.surname,
    middleName: this.navMember.middleName,
    gender: this.navMember.gender,
    dateOfBirth: this.navMember.dateOfBirth,
    initiationFlag: this.navMember.initiationFlag,
    magusFlag: this.navMember.magusFlag,
    magusDate: this.navMember.magusDate,
    mobileNumber: this.navMember.mobileNumber,
    emailAddress: this.navMember.emailAddress,
  };

  Back(): void {
    this.navCtrl.pop();
  }

  SaveMember(member: Member): void {
    console.log(member);
    let loading = this.notificationsCtrl.showLoading("please wait...")
    loading.present().then(() => {

      this.memberCtrl.SaveMember(this.member)
        .subscribe(data => {
          console.log(data);
          if (data.errorCode == '00') {
            this.notificationsCtrl.showToast('Your details have been registered successfully').then(() =>
              this.navCtrl.push("HomePage"));
          }
          else {
            this.notificationsCtrl.showToast(data.errorMessage, 5000)
          }
        },

        error => {
          loading.dismiss();
          this.notificationsCtrl.showAlert(error);

        },

        () => loading.dismiss());
    });
  }

}


