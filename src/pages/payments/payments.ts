import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { PaymentServicesProvider } from "../../providers/payment-services/payment-services";
// import { initRavePay } from "cordova-rave";
/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-payments",
  templateUrl: "payments.html"
})
export class PaymentsPage {
  public amount: string;

  public paymentTypes: any;
  public paymentModes: any;
  public currencies: any;

  public paymentType: any;
  public paymentMode: any;
  public currency: any;

  public showPaymentTypesSpin: boolean = true;
  public showPaymentModesSpin: boolean = true;
  public showCurrencySpinner: boolean = true;

  constructor(
    private navCtrl: NavController,
    private paymentsCtrl: PaymentServicesProvider
  ) {
    this.GetPaymentTypes();
    this.GetPaymentModes();
    this.GetCurrencies();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentsPage");
  }

  public doRefresh(refresher) {}

  public GetPaymentTypes() {
    this.paymentsCtrl.GetPaymentTypes().subscribe(
      data => {
        this.paymentTypes = data;
        this.showPaymentTypesSpin = false;
      },
      error => {
        console.log("Error Response " + JSON.stringify(error));
        this.showPaymentTypesSpin = false;
      },
      () => {
        this.showPaymentTypesSpin = false;
      }
    );
  }

  // public makePayment(amount) {
  //   console.log("got makePayment " + amount);

  //   initRavePay({
  //     PBFPubKey: "FLWPUBK-d9dda4676e150ec83eac4da33d8a2f4c-X",
  //     amount: amount,
  //     currency: "NGN",
  //     country: "NG",
  //     customer_email: "user@example.com",
  //     customer_firstname: "Jon",
  //     customer_lastname: "Snow",
  //     pay_button_text: "Pay now",
  //     custom_title: "",
  //     custom_description: "",
  //     redirect_url: "https://www.google.com",
  //     custom_logo: "",
  //     txref: "CD-102297-RV098299"
  //   });

  // }

  public GetPaymentModes() {
    this.paymentsCtrl.GetPaymentModes().subscribe(
      data => {
        this.paymentModes = data;
        this.showPaymentModesSpin = false;
      },
      error => {
        console.log("Error Response " + JSON.stringify(error));
        this.showPaymentModesSpin = false;
      },
      () => {
        this.showPaymentModesSpin = false;
      }
    );
  }

  public GetCurrencies() {
    this.paymentsCtrl.GetCurrencies().subscribe(
      data => {
        this.currencies = data;
        this.showPaymentModesSpin = false;
      },
      error => {
        console.log("Error Response " + JSON.stringify(error));
        this.showCurrencySpinner = false;
      },
      () => {
        this.showCurrencySpinner = false;
      }
    );
  }
}
