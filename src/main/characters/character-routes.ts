import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterViewComponent } from './character-view/character-view.component';

export const CHARACTER_ROUTES: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: 'view/:id',
    component: CharacterViewComponent,
  },
];
