import { AppUrls } from './app.constants';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpCallsService {

  constructor(private http: Http) { }

  //This method for get the data from http get method
  getData(url) {
    const headers: RequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    return this.http.get(url, headers)
      .map(response => response.json())
      .catch((err) => {
        return err.statusText;
      });
  }

  //This method for get the airportList
  getAirportList() {
     return this.getData(AppUrls.baseUrl + AppUrls.airportlistUrl);
    }

    //This method for get the fare details
  getFaresDetails(queryParam): Observable<Response> {
    return this.getData(AppUrls.baseUrl + AppUrls.faresUrl + queryParam);
  }

  //This method for get the dashboard details
  getDashboardDetails() {
    return this.getData(AppUrls.baseUrl + AppUrls.dashboardUrl)
  }





}
