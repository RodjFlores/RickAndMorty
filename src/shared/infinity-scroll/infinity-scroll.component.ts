import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ScrollMode } from '../../enums/ScrollMode.enum';
import { Paginator } from '../../models/Paginator';
import { SortDirection, SortTerm } from '../../enums/SortAndFilter.enum';
import { FilterObject } from '../../models/FilterObject';
import { FilterByPipe } from '../filter-by.pipe';
import { OrderByPipe } from '../order-by.pipe';
import { NgStyle, AsyncPipe, TitleCasePipe } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrl: './infinity-scroll.component.css',
  standalone: true,
  imports: [
    InfiniteScrollModule,
    NgStyle,
    AsyncPipe,
    TitleCasePipe,
    OrderByPipe,
    FilterByPipe,
  ],
})
export class InfinityScrollComponent {
  @Input() paginator$: Observable<Paginator>;
  @Input() mode: string = ScrollMode.CHARACTER;
  @Input() sortDirection: SortDirection = SortDirection.ASC;
  @Input() sortTerm: SortTerm = null;
  @Input() filterObject: FilterObject = {
    name: null,
    status: null,
    species: null,
  };
  @Output() loadMore = new EventEmitter<Paginator>();

  public ScrollMode = ScrollMode;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  emitLoadMore(value: Paginator) {
    this.loadMore.emit(value);
  }

  /**
   * Navigates to the model's details view
   * @param id
   */
  public navigateToDetails(id: number) {
    if (this.mode === ScrollMode.EP_CHAR) {
      this.router.navigate([`characters/view/${id}`]);
    } else {
      this.router.navigate([`view/${id}`], { relativeTo: this.route });
    }
  }
}
