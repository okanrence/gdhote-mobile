import { MemberServiceProvider } from './../../providers/member-service/member-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Member } from './../../models/member.interface';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';


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
    private toastService: ToastServiceProvider,
    private memberService: MemberServiceProvider) {
  }

  navMember = this.navParams.get('member');

  member: Member = {
    Key: this.navMember.Key,
    FirstName: this.navMember.FirstName,
    LastName: this.navMember.LastName,
    MiddleName: this.navMember.MiddleName,
    Gender: this.navMember.Gender,
    DateOfBirth: this.navMember.DateOfBirth,
    IsInitiated: this.navMember.IsInitiated,
    IsMagus: this.navMember.IsMagus,
    MagusDate: this.navMember.MagusDate,
    PhoneNumber: this.navMember.PhoneNumber,
    EmailAddress: this.navMember.EmailAddress,
  };

  Back(): void {
    this.navCtrl.pop();
  }

  SaveMember(member: Member): void {
    let loader = this.loadingCtrl.create({
      content: "Saving, please wait...",
      duration: 3000, spinner: 'ios'
    });
    loader.present().then(() => {
      //Call backend service here
      console.log(JSON.stringify(member));
     var response = this.memberService.SaveMember(member, true);
     if  (response == "Success"){
      this.toastService.show('Your details have been registered successfully');
      this.navCtrl.push("HomePage");
     }else{
      this.toastService.show('An Error Occured, please try again');
      this.navCtrl.pop();
     }
    });
    loader.dismiss();
  }

}


