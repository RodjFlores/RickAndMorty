import { Routes } from '@angular/router';
import { ConnectComponent } from '../main/connect/connect.component';
import { HomeComponent } from '../main/home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'characters',
    loadChildren: () =>
      import('../../src/main/characters/character-routes').then(
        (m) => m.CHARACTER_ROUTES,
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('../../src/main/episodes/episode-routes').then(
        (m) => m.EPISODES_ROUTES,
      ),
  },
  { path: 'connect', component: ConnectComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
