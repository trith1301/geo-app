import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Place } from 'src/app/models/place.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.geoApiURL || 'http:localhost:3000';

  constructor(private http: HttpClient) {}

  getPlaceById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/places/${id}`);
  }

  getAllPlaces(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/places`);
  }

  submitLocation(location: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/places/nearby/20`, {
      apiKey: environment.goongRESTAPIKey,
      location: {
        lat: location.lat,
        lng: location.lng,
      },
    });
  }

  updateStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/places/update/${id}`, {
      status: status,
    });
  }
}
