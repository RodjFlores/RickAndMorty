import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeViewComponent } from './episode-view/episode-view.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent,
  },
  {
    path: 'view/:id',
    component: EpisodeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
