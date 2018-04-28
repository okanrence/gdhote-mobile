import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { PublicationServicesProvider } from "../../providers/publication-services/publication-services";
import { NotificationsServiceProvider } from "./../../providers/notifications-service/notifications-service";
import { AlertController } from "ionic-angular/components/alert/alert-controller";

/**
 * Generated class for the PublicationsCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-publications-categories",
  templateUrl: "publications-categories.html"
})
export class PublicationsCategoriesPage {
  public categories: any;
  constructor(
    private categoriesCtrl: PublicationServicesProvider,
    private notificationsCtrl: NotificationsServiceProvider,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PublicationsCategoriesPage");
    this.GetCategories();
  }

  GetCategories() {
    let loading = this.notificationsCtrl.showLoading("..please wait..");

    loading.present().then(() => {
      this.categoriesCtrl.getCategories().subscribe(
        res => {
          console.log(res);
          this.categories = res;

          // else{
          // this.notificationCtrl.showAlert(res.ErrorMessage);
          // }
        },

        error => {
          loading.dismiss();
          console.log("Error Response " + JSON.stringify(error));
          this.notificationsCtrl.showAlert(error);
        },

        () => loading.dismiss()
      );
    });
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Enter your phonenumber",
      inputs: [
        {
          name: "phoneNumber",
          placeholder: "PhoneNumber"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Okay",
          handler: data => {
            // if (1 == 1) {
            //   this.NavigateToPage(data.phoneNumber);
            // } else {
            //   // invalid login
            //   return false;
            // }
            this.NavigateToPage(data.phoneNumber);
          }
        }
      ]
    });
    alert.present();
  }

  NavigateToPage(phoneNumber: string): void {
    this.navCtrl.push("PublicationsPage");
  }
}
