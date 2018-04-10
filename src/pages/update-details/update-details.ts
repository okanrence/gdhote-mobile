import { CommonServicesProvider } from './../../providers/common-services/common-services';
import { MemberServiceProvider } from './../../providers/member-service/member-service';
import { NotificationsServiceProvider } from './../../providers/notifications-service/notifications-service';
import { Member } from './../../models/member.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  phoneNumber : string;

  yearList: number[];
  daysList: number[];

  dob_year: number;
  dob_day: number;
  dob_month: string = "";

  magus_year: number;
  magus_day: number;
  magus_month: string = "";

  member:any 
  
  constructor(private navCtrl: NavController,
     private navParams: NavParams,
    private notificationCtrl :NotificationsServiceProvider,
     private memberCrtl : MemberServiceProvider,
     private commonCtrl: CommonServicesProvider) {

    this.member = new Member();
    this.member.firstName = "Olanrewaju";
  }

  ionViewDidLoad() {
this.member = new Member();
    this.member.firstName = "Olanrewaju";
    console.log('ionViewDidLoad UpdateDetailsPage');
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


  getMember(searchbar) {
    // Reset items back to all of the items
   // this.initializeItems();
  
    let q:string = searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if (!q || q.length < 11) {
      return;
    }
  
    // if(q.length < 11){
    //   return;
    // }

    let loading = this.notificationCtrl.showLoading("..please wait..");
    loading.present().then(() => {
      this.memberCrtl.getMember(q)
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
NextPage(){

}

populateValues(res){
  this.member = res; 
  if (!this.commonCtrl.IsNullValue(this.member.DateOfBirth)){
    this.dob_day = this.member.DateOfBirth.substring(0,2);
    this.dob_month = this.member.DateOfBirth.substring(4,3);
    this.dob_year = this.member.DateOfBirth.substring(7,4);
  }

  if (!this.commonCtrl.IsNullValue(this.member.MagusDate)){
    this.magus_day = this.member.MagusDate.substring(0,2);
    this.magus_month = this.member.MagusDate.substring(4,3);
    this.magus_year = this.member.MagusDate.substring(7,4);
  }
  this.member._should_update = true;

    // this.member.firstName = res.firstName;
    // this.member.surname = res.surname;
    // this.member.middleName = res.middleName;
    // this.member.mobileNumber = res.mobileNumber;
    // this.member.emailAddress = res.emailAddress;
    // this.member.dateOfBirth = res.dateOfBirth;
    // this.member.initiationFlag = res.initiationFlag;
    // this.member.magusFlag = res.magusFlag;
    // this.member.magusDate = res.magusDate;
    // this.member.maritalStatus = res.maritalStatus;

}
}
