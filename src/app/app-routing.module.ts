import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from '../main/connect/connect.component';
import { HomeComponent } from '../main/home/home.component';

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
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
