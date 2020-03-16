import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserLikes, UserLikeFromBack, ImageBackLikes, InformationUser, AvatarUser, InformationUserToBack } from '../api';


interface UserFromBack {
  id: string;
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
    const urlSaveFoto = 'http://localhost:8080/saveImages/' + id;
    const urlAvatar = 'http://localhost:8080/usersAvatars/' + id;
    const urlInformation = 'http://localhost:8080/usersInformation/' + id;
    this.http.delete(url).subscribe();
    this.http.delete(urlSaveFoto).subscribe();
    this.http.delete(urlAvatar).subscribe();
    this.http.delete(urlInformation).subscribe();
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
    return this.http.put('http://localhost:8080/imagelikes' + '/' + id , body).subscribe();
  }
  getAvatarUser(id: string) {
    return this.http.get('http://localhost:8080/usersAvatars' + '/' + id);
  }
  setDefaultAvatarUser() {
    const body = {
      avatar: 'assets/defaultAvatarUser.png'
    };
    return this.http.post('http://localhost:8080/usersAvatars' , body);
  }
  setNewAvatarUser(body: AvatarUser) {
    this.http.put('http://localhost:8080/usersAvatars' + '/' + body.id , body);
  }
  getInformationUser(id: string) {
    return this.http.get('http://localhost:8080/usersInformation' + '/' + id);
  }
  setInformationUser(id: string , body: InformationUser) {
    return this.http.put('http://localhost:8080/usersInformation' + '/' + id , body);
  }
  setDefaultInformationUser() {
    const defaultInformation = {
      userFotoInformation: '',
      userInformation: ''
    };
    return this.http.post('http://localhost:8080/usersInformation' , defaultInformation);
  }
  setDefaultSaveFoto() {
    const saveFoto = {
      saveFoto: '0, 0, 0, 0, 0'
    };
    return this.http.post('http://localhost:8080/saveImages' , saveFoto);
  }
}
