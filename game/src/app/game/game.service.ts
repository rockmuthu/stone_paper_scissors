import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  postId: any;

  constructor(private http: HttpClient) { }



    private apiUrl = 'http://localhost:8080/game/add';
  
  
    post(data: any[]): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.apiUrl}`;
  
      return this.http.post<any>(url, data, { headers });
    }



}
