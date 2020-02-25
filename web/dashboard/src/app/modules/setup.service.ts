import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


interface propertyData {
  success: boolean;
  message: string;
  propertyId: string
}

interface properties {
  [index: number]: {
    propertyName: string;
    propertyId: string;
    uniqueCode: string;
    location: string
  }
}

interface nodeDetails {
  message: string,
  success: string
}

interface controller {
  success: boolean;
  controllerId: string
}

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getPropertyId() {
    var propertyId = this.cookieService.get('propertyId');
    return propertyId;
  }

  setupAppDetails(propertyName, uniqueCode, location, latitude, longitude, elevation, area, adminName) {
    // post these details to API server return user info if correct
    return this.http.post<propertyData>('/api/property/create', {
      propertyName, uniqueCode, location, latitude, longitude, elevation, area, adminName
    })
  }

  getProperties(adminName) {
    return this.http.post('/api/property/getProperties', {
      adminName
    })
  }

  setupController(propertyId, controllerId) {
    var controllerType = 'AG Smart Controller';
    return this.http.post<controller>('/api/controller/create', {
      propertyId, controllerId, controllerType
    })
  }

  setNodeDetails(propertyID, deviceID) {
    return this.http.post<nodeDetails>('/api/node_data/setNode', {
      propertyID, deviceID
    })
  }
}
