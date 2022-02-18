import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PublicDoctorsService {
  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<any> {
    return this.http.get(`${environment.base_url}/doctors`);
  }
  getSingleDoctor(id: string): Observable<any> {
    return this.http.get(`${environment.base_url}/doctors/${id}`);
  }
}
