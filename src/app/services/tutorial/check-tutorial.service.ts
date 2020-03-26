import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class CheckTutorialService {
  constructor(private storage: Storage, private router: Router) {}

  canLoad() {
    return this.storage.get('tutorial_complete').then(res => {
      if (res) {
        this.router.navigateByUrl('/home');
        return false;
      } else {
        return true;
      }
    });
  }
}
