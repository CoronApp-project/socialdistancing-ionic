import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialDistanceArPage } from './social-distance-ar.page';

describe('SocialDistanceArPage', () => {
  let component: SocialDistanceArPage;
  let fixture: ComponentFixture<SocialDistanceArPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialDistanceArPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialDistanceArPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
