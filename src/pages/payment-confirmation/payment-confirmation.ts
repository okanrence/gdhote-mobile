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
    console.log("Log NavMember at ctor:" + JSON.stringify(this.ViewModel));
  }

  ionViewDidLoad() {
    console.log("Log NavMember:" + JSON.stringify(this.ViewModel));
  }

  Back(): void {
    this.navCtrl.pop();
  }

  public makePayment(viewModel: PaymentViewModel) {
    console.log("got makePayment ");
    // setTimeout(() => {
    //   this.navCtrl.push("HomePage");
    // }, 3000);

    window
      .initRavePay({
        // PBFPubKey: "FLWPUBK-d9dda4676e150ec83eac4da33d8a2f4c-X",
        amount: viewModel.Amount,
        country: "NG",
        pay_button_text: "Pay now",
        custom_title: "GDHOTE",
        custom_description: "The Great Divine Holy Order of the Third Era",
        txref: viewModel.Reference
      });
      // .then(() => this.navCtrl.push("HomePage"));
  }
}
