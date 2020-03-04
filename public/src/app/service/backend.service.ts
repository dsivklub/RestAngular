import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}
interface UsersGroupFromBack {
  id: number;
  user: User;
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  // const url = "http://localhost:8080/users";
  getUsersFromBack() {

    return this.http.get("http://localhost:8080/users");
  }
  setUser(user: UsersGroupFromBack) {
    const body = {
      name: user.user.name,
      surname: user.user.surname,
      email: user.user.email,
      nickname: user.user.nickname,
      passw: user.user.passw
    };
    console.log("Отправили", body);
    return this.http.post("http://localhost:8080/users", body);
  }
}
