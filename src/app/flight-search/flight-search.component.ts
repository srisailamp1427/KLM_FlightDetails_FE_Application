import { Messages } from './../shared/app.messages';
import { HttpCallsService } from './../shared/http-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  faresDetails={};
  availableResponse: boolean = false;
  origin: string;
  destination: string;
  showDestinationList = false;
  showOriginList = false;

  constructor(private httpCallService: HttpCallsService) { }
  airportCodeList = [];
  ngOnInit() {
    this.httpCallService.getAirportList().subscribe((data) => {
      this.airportCodeList = data._embedded.locations.map(location => location.code);
    });
  }

  //This method for get the fares details between origin and destination
  getFareOffer = () => {
    if (this.origin !== this.destination) {
      this.httpCallService.getFaresDetails('/' + this.origin + '/' + this.destination).subscribe((data) => {
        this.faresDetails = data && data['body'];
        this.availableResponse = true;
      });
    } else {
      alert(Messages.FARE_SEARCH_VALIDATION_ALERT);
    }

  }

  //This method for set the destination 
  setDestination = (dstCode) => {
    this.destination = dstCode;
    this.showDestinationList = false;
  }

  //This method for check the destination 
  checkDestination = () => {
    this.showDestinationList = (this.destination === '') ? false : true;
  }

//This method for set the origin 
  setOrigin = (orgCode) => {
    this.origin = orgCode;
    this.showOriginList = false;
  }

  //This method for check the origin 
  checkOrigin = () => {
    this.showOriginList = (this.origin === '') ? false : true;
  }

}
