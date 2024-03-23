import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiResponse, RickandmortyapiService } from '../../../services/rickandmortyapi.service';
import { BehaviorSubject, Observable, map, scan, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

export enum SortDirection{
  ASC = 'asc',
  DESC = 'desc'
}

export enum SortTerm{
  NAME = 'name',
  STATUS = 'status',
  SPECIES = 'species',
  EPISODES = 'episodes'
}

export enum CharacterStatus{
  UNKNOWN = 'unknown',
  DEAD = 'dead',
  ALIVE = 'alive',
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  // Sorting Variables
  public SortDirection = SortDirection;
  public SortTerm = SortTerm;
  public sortDirection:SortDirection = SortDirection.ASC
  public sortTerm:SortTerm|null = null
  // Filtering Variables
  public CharacterStatus = CharacterStatus;
  public filterObject = {
    name:null,
    status:null,
    species:null,
  }
  // Observable Data 
  public paginator$: Observable<any>;
  public loading$ = new BehaviorSubject(true);
  private page$ = new BehaviorSubject(1);

  constructor(private api:RickandmortyapiService,public router: Router,private route:ActivatedRoute){
    this.paginator$= this.loadCharacter()
  }
  
  private loadCharacter(): Observable<any> {
    return this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((page) => this.api.getCharacters(page)),
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

  public loadMoreCharacters(paginator:any) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page$.next(paginator.page + 1);
  }

  public resetFilters(){
    this.filterObject = {
      name:null,
      status:null,
      species:null,
    }
  }

  public navigateToDetails(id:string){
    this.router.navigate([`view/${id}`], { relativeTo: this.route })
  }
}
