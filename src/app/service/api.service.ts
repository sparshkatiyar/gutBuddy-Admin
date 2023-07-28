import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  baseUrl = environment.baseUrl 

  post(url: any, data: any) {
    // console.log(url);
    return this.http.post(`${this.baseUrl}/v1/admin/${url}`, data);
  }

  get(url: any) {
    // console.log(url);
    return this.http.get(`${this.baseUrl}/v1/admin/${url}`);
  }

  delete(url: any) {
    return this.http.delete(`${this.baseUrl}/v1/admin/${url}`);
  }
}
