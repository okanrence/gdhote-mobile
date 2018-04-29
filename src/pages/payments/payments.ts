import { Payment } from "./../../models/payment.interface";
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
  // public amount: string;

  public paymentTypes: any;
  public paymentModes: any;
  public currencies: any;

  public payment = new Payment();
  // public paymentType: any;
  // public paymentMode: any;
  // public currency: any;

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
    this.payment.txn_ref = '7911081-4810'
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

  public makePayment(payment: Payment) {
    console.log("got makePayment ");

    window.initRavePay({
      // PBFPubKey: "FLWPUBK-d9dda4676e150ec83eac4da33d8a2f4c-X",
      amount: payment.amount,
      // currency: "NGN",
      country: "NG",
      //customer_email: "user@example.com",
      // customer_firstname: "Jon",
      // customer_lastname: "Snow",
      pay_button_text: "Pay now",
      custom_title: "GDHOTE",
      custom_description: "The Great Divine Holy Order of the Third Era",
      // redirect_url: "https://www.google.com",
      // custom_logo: "",
      txref: payment.txn_ref
    });
  }

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
