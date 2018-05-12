import { PaymentViewModel } from "./../../models/payment.viewmodel";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Payment } from "../../models/payment.interface";

/**
 * Generated class for the PaymentConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-payment-confirmation",
  templateUrl: "payment-confirmation.html"
})
export class PaymentConfirmationPage {
  public ViewModel = new PaymentViewModel();
  public phoneNumber: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ViewModel = <PaymentViewModel>this.navParams.get("PaymentViewModel");
  }

  ionViewDidLoad() {
    console.log("Log NavMember:" + JSON.stringify(this.ViewModel));
  }

  Back(): void {
    this.navCtrl.pop();
  }
}
