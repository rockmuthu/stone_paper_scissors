import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }
  
    getAll(){
    return this.http.get('http://localhost:8080/game/getAll');
  }

}
