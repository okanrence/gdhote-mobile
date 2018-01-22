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

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { ToastServiceProvider } from '../providers/toast-service/toast-service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
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
    ToastServiceProvider

  ]
})
export class AppModule { }
