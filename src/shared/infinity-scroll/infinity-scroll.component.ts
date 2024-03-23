import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SortDirection, SortTerm } from '../../main/characters/character-list/character-list.component';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrl: './infinity-scroll.component.css'
})
export class InfinityScrollComponent {
  @Input() paginator$:Observable<any>;
  @Input() mode:string = 'character';
  @Input() sortDirection:SortDirection = SortDirection.ASC
  @Input() sortTerm:SortTerm|null = null
  @Input() filterObject = {
    name:null,
    status:null,
    species:null,
  }
  @Output() loadMore  = new EventEmitter<any>();

  constructor(public router: Router,private route:ActivatedRoute){
  }

  emitLoadMore(value: string) {
    this.loadMore.emit(value);
  }

  public navigateToDetails(id:string){
    this.router.navigate([`view/${id}`], { relativeTo: this.route })
  }
}
