import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('ngsw-worker.js');
    }

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      (window as any).deferredPrompt = e;
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
