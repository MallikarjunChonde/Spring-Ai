import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/volunteer.model';
import { VIPRequest } from '../models/vip-request.model';

@Injectable({
  providedIn: 'root'
})
export class VIPRequestService {
  private baseUrl = 'http://localhost:8080/api/v1/requests';

  constructor(private http: HttpClient) { }

  createVIPRequest(vipRequest: VIPRequest): Observable<Volunteer[]> {
    return this.http.post<Volunteer[]>(this.baseUrl, vipRequest);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.baseUrl}/volunteers`);
  }
}