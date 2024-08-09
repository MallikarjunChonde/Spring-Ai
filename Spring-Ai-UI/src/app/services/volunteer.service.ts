// // src/app/services/volunteer.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Volunteer } from '../models/volunteer.model';
// import { VIPRequest } from '../models/vip-request.model';

// @Injectable({
//   providedIn: 'root' // or in a specific module if not provided globally
// })
// export class VolunteerService {
//   private apiUrl = 'http://localhost:8080/api';

//   constructor(private http: HttpClient) {}

//   registerVolunteer(volunteer: Volunteer): Observable<Volunteer> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post<Volunteer>(`${this.apiUrl}/register`, volunteer, { headers });
//   }

//   findVolunteersByRequest(request: VIPRequest): Observable<Volunteer[]> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post<Volunteer[]>(`${this.apiUrl}/find-volunteers`, request, { headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/volunteer.model';
import { VIPRequest } from '../models/vip-request.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  registerVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Volunteer>(`${this.apiUrl}/register`, volunteer, { headers });
  }

  findVolunteersByRequest(request: VIPRequest): Observable<Volunteer[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Volunteer[]>(`${this.apiUrl}/find-volunteers`, request, { headers });
  }

  matchVolunteers(vipRequest: VIPRequest): Observable<Volunteer[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Volunteer[]>(`${this.apiUrl}/match-volunteers`, vipRequest, { headers });
  }
}