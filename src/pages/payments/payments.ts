import { PaymentViewModel } from "./../../models/payment.viewmodel";
import { Payment } from "./../../models/payment.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { PaymentServicesProvider } from "../../providers/payment-services/payment-services";
import { NotificationsServiceProvider } from "./../../providers/notifications-service/notifications-service";
import { MemberServiceProvider } from "../../providers/member-service/member-service";

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
  public paymentTypes: any;
  public phoneNumber: string;
  public paymentModes: any;
  public currencies: any;
  public Reference: string;
  public Payment = new Payment();
  public ViewModel = new PaymentViewModel();

  public showPaymentTypesSpin: boolean = true;
  public showPaymentModesSpin: boolean = true;
  public showCurrencySpinner: boolean = true;

  constructor(
    private navCtrl: NavController,
    private paymentsCtrl: PaymentServicesProvider,
    private notificationsCtrl: NotificationsServiceProvider,
    private memberCrtl: MemberServiceProvider
  ) {
    this.GetPaymentTypes();
    this.GetPaymentModes();
    this.GetCurrencies();
    // this.Payment.txn_ref = "7911081-4810";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentsPage");
  }

  public doRefresh(refresher) {}

  getMember() {
    let loading = this.notificationsCtrl.showLoading("..please wait..");
    loading.present().then(() => {
      this.memberCrtl.getMember(this.phoneNumber).subscribe(
        res => {
          console.log(res);
          if (res.length > 1) {
            //pop-up a modal and allow user select which one. i will implement this one day one day.
          } else {
            this.populateValues(res[0]);
          }
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error));
          this.notificationsCtrl.showAlert("not found");
        },

        () => loading.dismiss()
      );
    });
  }

  populateValues(res) {
    this.ViewModel.Name = res.FirstName + " " + res.Surname;
    this.ViewModel.EmailAddress = res.EmailAddress;
    this.ViewModel.MemberId = res.MemberId;
  }

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

  // public makePayment(payment: Payment) {
  //   console.log("got makePayment ");

  //   window.initRavePay({
  //     // PBFPubKey: "FLWPUBK-d9dda4676e150ec83eac4da33d8a2f4c-X",
  //     amount: payment.amount,
  //     country: "NG",
  //     pay_button_text: "Pay now",
  //     custom_title: "GDHOTE",
  //     custom_description: "The Great Divine Holy Order of the Third Era",
  //     txref: payment.dc
  //   });
  // }
  Back(): void {
    this.navCtrl.pop();
  }

  public InitiatePayment(paymentModel: PaymentViewModel) {
    let loading: any = this.notificationsCtrl.showLoading("..please wait..");
    loading.present().then(() => {
      let payment = new Payment();
      payment.amount = paymentModel.Amount;
      payment.currencyId = paymentModel.Currency;
      payment.memberId = paymentModel.MemberId;
      payment.narration = paymentModel.Narration;
      payment.paymentModeId = paymentModel.PaymentMode;
      payment.paymentTypeId = paymentModel.PaymentType;

      this.paymentsCtrl.InitiatePayment(payment).subscribe(
        data => {
          console.log("Response" + data);
          if (data.ErrorCode == "00") {
            this.ViewModel.Reference = data.Reference;
            this.navCtrl.push("PaymentConfirmationPage", {
              PaymentViewModel: this.ViewModel
            });
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
