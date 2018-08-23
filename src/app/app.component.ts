import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RegistrationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.disableScroll(false);
    });
  }
}
