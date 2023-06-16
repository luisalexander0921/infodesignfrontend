import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cars';

  constructor( private http:HttpClient ) { }

  list(): Observable<any> {
    
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  show(id: number): Observable<any> {
    return this.http.get<any>(this.myAppUrl + this.myApiUrl + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + '/' + id);
  }

  new(data: any): Observable<any> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, data);
  }

  edit(data: any): Observable<any> {
    return this.http.put<any>(`${this.myAppUrl}${this.myApiUrl}`, data);
  }
}
