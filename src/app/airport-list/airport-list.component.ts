import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../shared/http-calls.service'
@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {
  airportList = [];
  sortOptions = ['Code', 'Name', 'Description'];
  p: number = 1;
  itemsPerPage: number = 5;
  constructor(private httpCallService: HttpCallsService) {

  }

  ngOnInit() {
    this.httpCallService.getAirportList().subscribe((data) => {
      this.airportList = data && data._embedded && data._embedded.locations;
    });
    
  }

  //This method for select sorting option
  setSortOption = (option) => {
    if(option) {
      this.sortByCode(option.toLowerCase());
    }
  }

  // This method for sort the airportlist 
  sortByCode = (option) => {
    this.airportList = this.airportList.sort((a, b) => {
      if(a[option] < b[option]) return -1;
      if(a[option] > b[option]) return 1;
      return 0;
    });
  }

}
