import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialDistancingSettingsPageRoutingModule } from './social-distancing-settings-routing.module';

import { SocialDistancingSettingsPage } from './social-distancing-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialDistancingSettingsPageRoutingModule
  ],
  declarations: [SocialDistancingSettingsPage]
})
export class SocialDistancingSettingsPageModule {}
