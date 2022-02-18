import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { Doctor } from './../../models/Doctor';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  getHeaders() {
    const token = this.auth.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getAllDoctors(): Observable<any> {
    return this.http.get(`${environment.base_url}/admin/doctors`, {
      headers: this.getHeaders(),
    });
  }
  getSingleDoctor(id: string): Observable<any> {
    return this.http.get(`${environment.base_url}/admin/doctors/${id}`, {
      headers: this.getHeaders(),
    });
  }
  editDoctor(id: string, data: any): Observable<any> {
    return this.http.patch(
      `${environment.base_url}/admin/doctors/${id}`,
      data,
      {
        headers: this.getHeaders(),
      }
    );
  }
  createDoctor(data: any): Observable<any> {
    return this.http.post(`${environment.base_url}/admin/doctors`, data);
  }
  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(`${environment.base_url}/admin/doctors/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
