import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlamaService {

  private apiUrl = 'http://localhost:8080/getLlamaResponse';

  constructor(private http: HttpClient) { }

  getLlamaResponse(inputText: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}?inputText=${inputText}`);
  }
}
