import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private apiUrl = 'https://colegio-curso-default-rtdb.firebaseio.com/colegio.json';

  constructor(private http: HttpClient) {}

  getObjetos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}