import { DateObj } from './../../models/date.interface';
import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { MemberServiceProvider } from './../../providers/member-service/member-service';
import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';
import { Member } from './../../models/member.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the UpdateDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-details',
  templateUrl: 'update-details.html',
})


export class UpdateDetailsPage {

  dateOfBirth: DateObj;
  magusDate: DateObj;
  phoneNumber : string;

  years: number[];
  days: number[];
  months: [{}];

  maritalStatusList: [{}];
  
  member: Member;
  
  constructor(private navCtrl: NavController,
    private notificationCtrl :NotificationsServiceProvider,
     private memberCrtl : MemberServiceProvider,
     private commonCtrl: CommonServicesProvider) {

    this.member = new Member();
    this.dateOfBirth = new DateObj();
    this.magusDate = new DateObj();

    this.days = this.commonCtrl.GetDays();
    this.years = this.commonCtrl.GetYears();
    this.months = this.commonCtrl.GetMonths();
    this.maritalStatusList = this.commonCtrl.GetMaritalStatusList();

  }

  ionViewDidLoad() {

  }


  getMember() {
    let loading = this.notificationCtrl.showLoading("..please wait..");
    loading.present().then(() => {
      this.memberCrtl.getMember(this.phoneNumber)
        .subscribe(res => {
          console.log(res);
        if(res.length > 1){

        }else{
          this.populateValues(res[0]);
        }
          
          // else{
          // this.notificationCtrl.showAlert(res.ErrorMessage);
          // }
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error))
          this.notificationCtrl.showAlert(error);
        },

        () => loading.dismiss());
    });


  // getMember(searchbar) {
  //   // Reset items back to all of the items
  //  // this.initializeItems();
  
  //   let q:string = searchbar.srcElement.value;
  //   // if the value is an empty string don't filter the items
  //   if (!q || q.length < 11) {
  //     return;
  //   }
  
  //   // if(q.length < 11){
  //   //   return;
  //   // }

  //   let loading = this.notificationCtrl.showLoading("..please wait..");
  //   loading.present().then(() => {
  //     this.memberCrtl.getMember(q)
  //       .subscribe(res => {
  //         console.log(res);
  //       if(res.length > 1){

  //       }else{
  //         this.populateValues(res[0]);
  //       }
          
  //         // else{
  //         // this.notificationCtrl.showAlert(res.ErrorMessage);
  //         // }
  //       },

  //       error => {
  //         loading.dismiss();
  //         console.log("Error Response " + JSON.stringify(error))
  //         this.notificationCtrl.showAlert(error);
  //       },

  //       () => loading.dismiss());
  //   });

    // this.countryList = this.countryList.filter((v) => {
    //   if(v.name && q) {
    //     if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //       return true;
    //     }
    //     return false;
    //   }
    // });
  
    //console.log(q, this.countryList.length);
  
  }
  NextPage() {
    let loader: any = this.notificationCtrl.showLoading("..please wait..");
    loader.present().then(() => {
      this.member.MagusDate = this.commonCtrl.GetDateString(this.magusDate);
      this.member.DateOfBirth =  this.commonCtrl.GetDateString(this.dateOfBirth);
      this.member._should_update = true;
     console.log(JSON.stringify(this.member));
      this.navCtrl.push("ConfirmationPage", { member: this.member });

    });

    loader.dismiss();
  }

populateValues(res){
  this.member = res; 
  this.dateOfBirth = this.commonCtrl.GetDate(this.member.DateOfBirth);
   this.magusDate = this.commonCtrl.GetDate(this.member.MagusDate);
  this.member._should_update = true;
  }
}
