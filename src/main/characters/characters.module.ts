import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    SharedModule
  ]
})
export class CharactersModule { }
