import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbsoluteTablePaginationComponent } from './absolute-table-pagination.component';



@NgModule({
  declarations: [AbsoluteTablePaginationComponent],
  imports: [ CommonModule  ],
  exports: [AbsoluteTablePaginationComponent]
})
export class AbsoluteTablePaginationModule { }
