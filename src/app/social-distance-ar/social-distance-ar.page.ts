import { Component, OnInit } from '@angular/core';
import { SocialDistanceService } from './social-distance.service';

@Component({
  selector: 'app-social-distance-ar',
  templateUrl: './social-distance-ar.page.html',
  styleUrls: ['./social-distance-ar.page.scss']
})
export class SocialDistanceArPage implements OnInit {
  constructor(private socialDistanceService: SocialDistanceService) {}

  ngOnInit() {
    window.addEventListener('circle-ready-event', () => {
      this.socialDistanceService.initializeCircle();
    });
  }
}
