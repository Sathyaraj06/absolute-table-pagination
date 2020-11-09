import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {AbsoluteTablePaginationModule} from '../../../absolute-table-pagination/src/lib/absolute-table-pagination.module'
import { AbsoluteTablePaginationModule } from 'absolute-table-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbsoluteTablePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
