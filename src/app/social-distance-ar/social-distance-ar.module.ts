import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialDistanceArPageRoutingModule } from './social-distance-ar-routing.module';

import { SocialDistanceArPage } from './social-distance-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialDistanceArPageRoutingModule
  ],
  declarations: [SocialDistanceArPage]
})
export class SocialDistanceArPageModule {}
