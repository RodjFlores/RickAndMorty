import { Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeViewComponent } from './episode-view/episode-view.component';

export const EPISODES_ROUTES: Routes = [
  {
    path: '',
    component: EpisodeListComponent,
  },
  {
    path: 'view/:id',
    component: EpisodeViewComponent,
  },
];
