import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { RickAndMortyApiService } from '../../../services/rickandmortyapi.service';
import { Location, AsyncPipe } from '@angular/common';
import { ScrollMode } from '../../../enums/ScrollMode.enum';
import { Paginator } from '../../../models/Paginator';
import { Episode } from '../../../models/Episode';
import { InfinityScrollComponent } from '../../../shared/infinity-scroll/infinity-scroll.component';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrl: './episode-view.component.css',
  standalone: true,
  imports: [InfinityScrollComponent, AsyncPipe],
})
export class EpisodeViewComponent implements OnInit {
  public ScrollMode = ScrollMode;
  public episode$: Observable<Episode>;
  public characterPaginator$: Observable<Paginator>;
  constructor(
    private route: ActivatedRoute,
    private api: RickAndMortyApiService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.episode$ = this.api.getEpisode(params['id']).pipe(
          switchMap((res) => {
            this.characterPaginator$ = this.api.getCharactersByMultiIds(
              res.characters,
            );
            return of(res);
          }),
        );
      }
    });
  }
  /**
   * Navigates to the previous page.
   */
  public navigateBack() {
    this.location.back();
  }
}
