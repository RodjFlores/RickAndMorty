import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CharacterViewComponent } from './character-view/character-view.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterViewComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class CharactersModule { }
