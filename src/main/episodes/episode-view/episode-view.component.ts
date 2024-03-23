import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { RickandmortyapiService } from '../../../services/rickandmortyapi.service';
import { Location } from '@angular/common';
import { ScrollMode } from '../../../enums/ScrollMode.enum';
import { Paginator } from '../../../models/Paginator';
import { Episode } from '../../../models/Episode';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrl: './episode-view.component.css'
})
export class EpisodeViewComponent {
  public ScrollMode = ScrollMode
  public episode$: Observable<Episode>;
  public characterPaginator$: Observable<Paginator>
  constructor(private route: ActivatedRoute, private api: RickandmortyapiService, private location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.episode$ = this.api.getEpisode(params['id']).pipe(switchMap(res => {
          this.characterPaginator$ = this.api.getCharactersByMultiIds(res.characters)
          console.log(this.characterPaginator$)
          return of(res)
        }));
      }
    });
  }

  public navigateBack() {
    this.location.back()
  }
}
