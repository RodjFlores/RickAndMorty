import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { ConnectComponent } from '../main/connect/connect.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {
    path: 'characters',
    loadChildren: () => import('../../src/main/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('../../src/main/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  { path: 'connect', component: ConnectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
