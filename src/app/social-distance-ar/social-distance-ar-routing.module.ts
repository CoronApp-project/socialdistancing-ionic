import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialDistanceArPage } from './social-distance-ar.page';

const routes: Routes = [
  {
    path: '',
    component: SocialDistanceArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialDistanceArPageRoutingModule {}
