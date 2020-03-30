import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialDistancingSettingsPage } from './social-distancing-settings.page';

describe('SocialDistancingSettingsPage', () => {
  let component: SocialDistancingSettingsPage;
  let fixture: ComponentFixture<SocialDistancingSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialDistancingSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialDistancingSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
