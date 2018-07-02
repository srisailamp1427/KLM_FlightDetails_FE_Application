/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Ordinates {
  latitude: number;
  longitude: number;
}

interface Location {
  code: string;
  name: string;
  description: string;
  coordinates: Ordinates;
  parent?: Location;
}

interface Embedded {
  locations: Location[];
}

interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

interface AirPortLists {
  _embedded: Embedded;
  page: Page;
}

interface City {
  code: string;
  name: string;
  description: string;
  coordinates: Ordinates;
  parent?: City;
  children?: any;
}

interface Fare {
  amount: number;
  currency: string;
  origin: string;
  destination: string;
}

interface FaresDetails {
  origin: City;
  destination: City;
  fare: Fare;
}

