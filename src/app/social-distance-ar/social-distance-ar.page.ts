import { Component, OnInit, NgZone } from '@angular/core';
import { SocialDistanceService } from './social-distance.service';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-social-distance-ar',
  templateUrl: './social-distance-ar.page.html',
  styleUrls: ['./social-distance-ar.page.scss']
})
export class SocialDistanceArPage implements OnInit {
  constructor(
    private socialDistanceService: SocialDistanceService,
    private navController: NavController,
    private geolocation: Geolocation
  ) {}
  forceUpdate: boolean = false;
  ngOnInit() {
    window.addEventListener('circle-ready-event', () => {
      this.socialDistanceService.initializeCircle();
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe(location => {
      this.socialDistanceService.updateCircleLocation(location);
    });
  }

  naivgateToSettings() {
    this.navController.navigateForward('/ar-settings');
  }
}
