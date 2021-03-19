import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatNumber } from '@angular/common';

const baseURL = 'http://localhost:63100/api/games';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game = {
    Id:0,
    gameName: '',
    gameDescription: '',
    gamePhotoUrl: '',
    price:0,
  };
  
  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: Number, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: Number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: String): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}
