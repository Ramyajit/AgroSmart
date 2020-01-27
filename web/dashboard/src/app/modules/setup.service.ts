import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


interface propertyData {
  success: boolean;
  message: string;
  propertyId: string
}

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getPropertyId(){
    var propertyId = this.cookieService.get('propertyId');
    return propertyId;
  }

  setupAppDetails(propertyName, uniqueCode, location, latitude, longitude, elevation, area, adminName) {
    // post these details to API server return user info if correct
    return this.http.post<propertyData>('/api/property/create', {
      propertyName, uniqueCode, location, latitude, longitude, elevation, area, adminName
    })
  }
}
