import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  const url = "http://localhost:8080/users";
  getUsersFromBack() {

    return this.http.get(this.url);
  }
  setUser(user: User) {
    const body = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      nickname: user.nickname,
      passw: user.passw
    };
    this.http.post(this.url, body);
    console.log("Отправили", body);
  }
}
