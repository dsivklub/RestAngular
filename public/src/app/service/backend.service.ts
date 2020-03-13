import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserLikes, UserLikeFromBack, ImageBackLikes } from '../api';


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
  getUserLikes() {
    return this.http.get('http://localhost:8080/saveImages');
  }
  setUserLikes(body: UserLikeFromBack) {
    return this.http.post('http://localhost:8080/saveImages' , body).subscribe();
  }
  getInformationAboutImageLikes() {
    return this.http.get('http://localhost:8080/imagelikes');
  }
  setInformationAboutImageLikes(body: ImageBackLikes) {
    const id = body.idFoto;
    //
    return this.http.put('http://localhost:8080/imagelikes' + '/' + id , body).subscribe();
  }
}
