import { HttpCallsService } from './shared/http-calls.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HttpModule } from '@angular/http';
import { AirportListComponent } from './airport-list/airport-list.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe} from './shared/filter.pipe';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    AirportListComponent,
    HomeComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [HttpCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
