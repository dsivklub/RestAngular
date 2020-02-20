import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getStudentsFromBack() {
    return this.http.get('http://localhost:8080/greeting');
  }
}
