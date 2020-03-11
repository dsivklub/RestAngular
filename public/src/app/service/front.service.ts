import { Injectable } from '@angular/core';
import {User , UsersGroupFromBack, UserLikes, ImageBack, ImageBackLikes} from '../api';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';

interface UserOnSite {
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



export class FrontService {
  autorizate: boolean;
  user: UserOnSite;
  userLikes: UserLikes = {
    id: 'default',
    likes: []
  };
  users: Array<UserOnSite> = [];
  userImage: Array<string> = [];
  newImages = true;
  images: Array<ImageBack> = [];
  numberPhotos = 0;
  firstLoad: true;
  informationAboutErnlageImage: ImageBack;
  informationAboutImageLikes: Array<ImageBackLikes>;
  constructor(private http: HttpClient,  private backService: BackendService) { }
  setAuthorizationUser(user: UserOnSite) {
    this.user = user;
  }
  getAuthorizationUser() {
    return this.user;
  }
  setAutorizate() {
    this.autorizate = true;
  }
  getAutorizate() {
    return this.autorizate;
  }
  setUserLike(userLikes: UserLikes) {
    this.userLikes = userLikes;
  }
  getUserLike() {
    return this.userLikes;
  }
  getUserImage() {
    return this.userImage;
  }
  setUserImage(id: string) {
    this.backService.getImage().subscribe((image: Array<ImageBack>) => {
      for(let i = 0; i < image.length; i++){
        if(image[i].id === id){
        this.userImage.push(image[i].src);
        }
      }
    });
  }
  setInformationAboutErnlageImage(src: string) {
    this.backService.getImage().subscribe((images:Array<ImageBack>) => {
      for (let i = 0 ; i < images.length ; i++){
        console.log('&' , src.split('http://localhost:4200/', 2)[1]);
        if(images[i].src === src.split('http://localhost:4200/', 2)[1]){
        this.informationAboutErnlageImage = images[i];
        console.log('Открыли' , this.informationAboutErnlageImage);
        }
      }
    });
  }
  getInformationAboutErnlageImage() {
    console.log('при срабатывании геттера', this.informationAboutErnlageImage);
    return this.informationAboutErnlageImage;
  }
  setUsers(users: Array<UserOnSite>) {
    this.users = users;
  }
  getUsers() {
    return this.users;
  }
  setInformationAboutImageLikes(likes: Array<ImageBackLikes>)  {
    this.informationAboutImageLikes = likes;
  }
  getInformationAboutImageLikes() {
    return this.informationAboutImageLikes;
  }
}
