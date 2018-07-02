import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../shared/app.constants';
import { HttpCallsService } from '../shared/http-calls.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appConstants = {};
  dashboardDetails={};
  constructor(private httpServiceCall: HttpCallsService) { 
    this.appConstants = AppConstants;
  }

  ngOnInit() {
    this.httpServiceCall.getDashboardDetails().subscribe(response => {
      this.dashboardDetails = response;
    })
    }
}
