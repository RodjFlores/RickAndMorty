import { Component } from '@angular/core';
import { RickandmortyapiService } from '../../../services/rickandmortyapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';
import { Paginator } from '../../../models/Paginator';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css'
})
export class EpisodeListComponent {

    // Observable Data 
    public episodes$:Observable<Paginator>
    public paginator$: Observable<Paginator>;
    public loading$ = new BehaviorSubject(true);
    private page$ = new BehaviorSubject(1);

  constructor(private api:RickandmortyapiService,public router: Router,private route:ActivatedRoute){
    this.paginator$= this.loadEpisodes()
  }

  private loadEpisodes(): Observable<Paginator> {
    return this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((page) => this.api.getEpisodes(page)),
      scan(this.updatePaginator, {items: [], page: 0, hasMorePages: true}),
      tap(() => this.loading$.next(false)),
    );
  }

  private updatePaginator(accumulator: Paginator, value: Paginator): Paginator {
    if (value.page === 1) {
      return value;
    }
    
    accumulator.items.push(...value.items);
    accumulator.page = value.page;
    accumulator.hasMorePages = value.hasMorePages;

    return {...accumulator};
  }
  /**
   * Triggers the updating of the paginator on scroll
   * @param paginator 
   * @returns 
   */
  public loadMoreEpisodes(paginator:Paginator) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page$.next(paginator.page + 1);
  }
}
