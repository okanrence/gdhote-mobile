import { Nav } from 'ionic-angular';
// import { Network } from '@ionic-native/network';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatePicker } from '@ionic-native/date-picker';
import { MemberServiceProvider } from '../providers/member-service/member-service';

import { FormsModule } from '@angular/forms'
import { LoginServiceProvider } from '../providers/login-service/login-service';

import { AngularFireModule } from 'angularfire2'

import { AngularFireDatabaseModule } from 'angularfire2/database'

import { HttpModule } from '@angular/http'
import { NotificationsServiceProvider } from './../providers/notifications-service/notifications-service';

import { CommonServicesProvider } from '../providers/common-services/common-services';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { Network } from '@ionic-native/network';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MemberServiceProvider, DatePicker, LoginServiceProvider,
    NotificationsServiceProvider,
    CommonServicesProvider,
    HttpServiceProvider,
    Network, NativeStorage,
    StorageServiceProvider, 

  ]
})
export class AppModule { }
