import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PaymentServicesProvider } from "../../providers/payment-services/payment-services";

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
    private navParams: NavParams,
    private paymentServicesCtrl: PaymentServicesProvider
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
    this.paymentServicesCtrl.GetPaymentTypes().subscribe(
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

  public GetPaymentModes() {
    this.paymentServicesCtrl.GetPaymentModes().subscribe(
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
    this.paymentServicesCtrl.GetCurrencies().subscribe(
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
