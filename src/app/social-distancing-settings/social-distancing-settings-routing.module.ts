import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialDistancingSettingsPage } from './social-distancing-settings.page';

const routes: Routes = [
  {
    path: '',
    component: SocialDistancingSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialDistancingSettingsPageRoutingModule {}
