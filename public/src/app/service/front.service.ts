import { Injectable } from '@angular/core';
import {User , UsersGroupFromBack, UserLikes, ImageBack} from '../api';
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
  userImage: Array<String> = [];
  newImages = true;
  images: Array<ImageBack> = [];
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
}
