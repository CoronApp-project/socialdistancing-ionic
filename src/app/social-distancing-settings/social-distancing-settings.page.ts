import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { SocialDistanceService } from '../social-distance-ar/social-distance.service';
@Component({
  selector: 'app-social-distancing-settings',
  templateUrl: './social-distancing-settings.page.html',
  styleUrls: ['./social-distancing-settings.page.scss']
})
export class SocialDistancingSettingsPage implements OnInit {
  constructor(
    private navController: NavController,
    private pickerController: PickerController,
    private socialDistanceService: SocialDistanceService
  ) {}

  colors: string[] = ['Red', 'Blue', 'Green', 'White', 'Black'];

  ngOnInit() {}
  navigateBack() {
    this.navController.back();
  }
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.socialDistanceService.setCircleColor(value['Colors']['value']);
          }
        }
      ],
      columns: [
        {
          name: 'Colors',
          options: this.getColumnOptions()
        }
      ]
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumnOptions() {
    let options = [];
    this.colors.forEach(x => {
      options.push({ text: x, value: x });
    });
    return options;
  }
}
