import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';

@NgModule({
  declarations: [OrderByPipe, FilterByPipe, InfinityScrollComponent],
  imports: [CommonModule, InfiniteScrollModule],
  exports: [
    OrderByPipe,
    FilterByPipe,
    InfiniteScrollModule,
    InfinityScrollComponent,
  ],
  providers: [OrderByPipe, FilterByPipe],
})
export class SharedModule {}
