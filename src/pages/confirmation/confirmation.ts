import { CommonServicesProvider } from "./../../providers/common-services/common-services";
import { NotificationsServiceProvider } from "./../../providers/notifications-service/notifications-service";
import { MemberServiceProvider } from "./../../providers/member-service/member-service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Member } from "./../../models/member.interface";

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-confirmation",
  templateUrl: "confirmation.html"
})
export class ConfirmationPage {
  public member = new Member();
  public maritalStatusCode: string;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private notificationsCtrl: NotificationsServiceProvider,
    private memberCtrl: MemberServiceProvider,
    private commonCtrl: CommonServicesProvider
  ) {}

  Back(): void {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.member = <Member>this.navParams.get("member");
    console.log("Log NavMember:" + JSON.stringify(this.member));

    if (this.member) {
      this.maritalStatusCode = this.commonCtrl.GetMaritalStatusCode(
        this.member.MaritalStatus
      );
    } else {
      // this block is not working for some reason. I am not even sure this makes any sense in the first place.
      this.navCtrl.push("RegisterMemberPage");
    }
  }

  SaveMember(member: Member): void {
    console.log(member);
    let loading = this.notificationsCtrl.showLoading("...please wait...");
    loading.present().then(() => {
      this.memberCtrl.SaveMember(this.member).subscribe(
        data => {
          console.log("Response" + data);
          if (data.ErrorCode == "00") {
            this.notificationsCtrl
              .showToast("Your details have been registered successfully")
              .then(() => this.navCtrl.push("HomePage"));
          } else {
            this.notificationsCtrl.showAlert(data.ErrorMessage, "Error");
          }
        },

        error => {
          loading.dismiss();
          this.notificationsCtrl.showAlert(error, "error");
        },

        () => loading.dismiss()
      );
    });
  }
}
