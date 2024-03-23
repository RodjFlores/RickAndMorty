import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    EpisodeListComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    SharedModule
  ]
})
export class EpisodesModule { }
