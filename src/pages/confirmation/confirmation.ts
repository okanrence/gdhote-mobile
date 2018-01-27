import { CommonServicesProvider } from './../../providers/common-services/common-services';
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

  member: Member;
maritalStatusCode: string;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private notificationsCtrl: NotificationsProvider,
    private memberCtrl: MemberServiceProvider,
  private commonCtrl: CommonServicesProvider) {
    this.member = this.navParams.get('member');
    this.maritalStatusCode = this.commonCtrl.GetMaritalStatusCode(this.member.maritalStatus);
    console.log("Log NavMember:" + JSON.stringify(this.member))
  }

  Back(): void {
    this.navCtrl.pop();
  }

  SaveMember(member: Member): void {
    console.log(member);
    let loading = this.notificationsCtrl.showLoading("...please wait...")
    loading.present().then(() => {
      this.memberCtrl.SaveMember(this.member)
        .subscribe(data => {
          console.log("Response" + data);
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


