import { NotificationsServiceProvider } from "./../providers/notifications-service/notifications-service";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Network } from "@ionic-native/network";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private network: Network,
    private notificationsCtrl: NotificationsServiceProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //    { title: 'List', component: ListPage }
    //  ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.network.onDisconnect().subscribe(() => {
        this.notificationsCtrl.showToast(
          "Network disconnected. Please ensure you are connected to the internet to use the app",
          5000
        );
      });

      this.network.onConnect().subscribe(() => {
        this.notificationsCtrl.showToast("Network connected!");
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        // setTimeout(() => {
        //   if (this.network.type === 'wifi') {
        //     this.notificationsCtrl.showToast('we got a wifi connection, woohoo!');
        //   }
        // }, 3000);
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
