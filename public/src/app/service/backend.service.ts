import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../api';
import { FrontService } from './front.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

interface UserFromBack {
  id: string,
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
  frontService: any;
  constructor(private http: HttpClient) {}
  // const url = "http://localhost:8080/users";
  getUsersFromBack() {
    return this.http.get('http://localhost:8080/users');
  }
  setUser(user: User) {
    const body = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      nickname: user.nickname,
      passw: user.passw
    };
    console.log('Отправили', body);
    return this.http.post('http://localhost:8080/users', body);
  }
  getImage() {
    return this.http.get('http://localhost:8080/image');
  }
  changeUserInformation(body: UserFromBack) {
    const id = body.id;
    const url = 'http://localhost:8080/users/' + id;
    this.http.put(url , body).subscribe();
  }
  deleteUser(body: UserFromBack) {
    const id = body.id;
    const url = 'http://localhost:8080/users/' + id;
    this.http.delete(url).subscribe();
  }
}
