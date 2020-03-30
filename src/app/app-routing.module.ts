import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'social-distance-ar',
    loadChildren: () =>
      import('./social-distance-ar/social-distance-ar.module').then(
        m => m.SocialDistanceArPageModule
      )
  },
  {
    path: 'ar-settings',
    loadChildren: () =>
      import(
        './social-distancing-settings/social-distancing-settings.module'
      ).then(m => m.SocialDistancingSettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
