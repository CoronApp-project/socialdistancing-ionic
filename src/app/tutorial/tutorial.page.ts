import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {
  constructor(private storage: Storage, private router: Router) {}

  completeTutorial() {
    this.router.navigateByUrl('/home').then(() => {
      this.storage.set('tutorial_complete', true);
    });
  }
}
