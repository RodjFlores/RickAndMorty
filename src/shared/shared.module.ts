import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';
import { SortByPipe } from './sort-by.pipe';



@NgModule({
  declarations: [
    OrderByPipe,
    SortByPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderByPipe,
    SortByPipe
  ],
  providers:[
    OrderByPipe,
    SortByPipe
  ]
})
export class SharedModule { }
