import { Component, OnInit, NgZone } from '@angular/core';
import { SocialDistanceService } from './social-distance.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-social-distance-ar',
  templateUrl: './social-distance-ar.page.html',
  styleUrls: ['./social-distance-ar.page.scss']
})
export class SocialDistanceArPage implements OnInit {
  constructor(
    private socialDistanceService: SocialDistanceService,
    private navController: NavController,
    private ngZone: NgZone
  ) {}
  forceUpdate: boolean = false;
  ngOnInit() {
    window.addEventListener('circle-ready-event', () => {
      this.socialDistanceService.initializeCircle();
    });
  }

  naivgateToSettings() {
    this.navController.navigateForward('/ar-settings');
  }
}
