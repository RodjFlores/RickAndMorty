import { Component } from '@angular/core';
import { RickandmortyapiService } from '../../../services/rickandmortyapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css'
})
export class EpisodeListComponent {

  public episodes$:Observable<any>

    // Observable Data 
    public paginator$: Observable<any>;
    public loading$ = new BehaviorSubject(true);
    private page$ = new BehaviorSubject(1);

  constructor(private api:RickandmortyapiService,public router: Router,private route:ActivatedRoute){
    this.paginator$= this.loadEpisodes()
  }

  private loadEpisodes(): Observable<any> {
    return this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((page) => this.api.getEpisodes(page)),
      scan(this.updatePaginator, {items: [], page: 0, hasMorePages: true}),
      tap(() => this.loading$.next(false)),
    );
  }

  private updatePaginator(accumulator: any, value: any): any {
    if (value.page === 1) {
      return value;
    }
    
    accumulator.items.push(...value.items);
    accumulator.page = value.page;
    accumulator.hasMorePages = value.hasMorePages;

    return {...accumulator};
  }

  public loadMoreEpisodes(paginator:any) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page$.next(paginator.page + 1);
  }

  public navigateToDetails(id:string){
    this.router.navigate([`view/${id}`], { relativeTo: this.route })
  }
}
