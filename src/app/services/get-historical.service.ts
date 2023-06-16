import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetHistoricalService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'historical';

  constructor( private http:HttpClient ) { }

  listHistorical(data: any): Observable<any> {
    
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, data);
  }
}
