import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Planet } from '../models/planet';
import { SwapiResult } from '../models/swapi-result';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  apiUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPlanets(): Observable<SwapiResult> {
    return this.http
      .get<SwapiResult>(`${this.apiUrl}/planets`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http
      .get<Planet>(`${this.apiUrl}/planets/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
