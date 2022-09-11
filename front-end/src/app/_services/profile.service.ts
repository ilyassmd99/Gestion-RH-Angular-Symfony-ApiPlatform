import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admins } from 'src/model/admin';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:8000/api/home'
  list! : Admins[]

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<any>{
    return this.http.get(this.url)
  }
}
