import { PageNotFoundErrorComponent } from './shared/components/page-not-found-error/page-not-found-error.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportListComponent } from './airport-list/airport-list.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'flightsearch', component: FlightSearchComponent
    },{
      path: 'home', component: HomeComponent
    },{
      path: 'dashboard', component: DashboardComponent
    },{
      path: 'airportlist', component: AirportListComponent
    },{
      path: 'pagenotfound', component: PageNotFoundErrorComponent
    },{
      path: '', redirectTo: 'home', pathMatch: 'full'
    },{
      path: '**', redirectTo: 'pagenotfound', pathMatch: 'full'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
