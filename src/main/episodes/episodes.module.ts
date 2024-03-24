import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SharedModule } from '../../shared/shared.module';
import { EpisodeViewComponent } from './episode-view/episode-view.component';
@NgModule({
  declarations: [EpisodeListComponent, EpisodeViewComponent],
  imports: [CommonModule, EpisodesRoutingModule, SharedModule],
})
export class EpisodesModule {}
