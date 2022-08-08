import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}

   login(body: any) {
    return this.http.post('https://balisage.herokuapp.com/api/auth',body);
  }
}
