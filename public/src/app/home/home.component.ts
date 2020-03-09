import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';
import {   UserLikes, ImageBack } from '../api';
import { BackendService } from '../service/backend.service';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user: User;
  counter = 1;
  counterLike = 1; // надо сделать массивом для каждой фотографии
  enrlargedImage: string;
  enlargeVision = false;
  imageBack: Array<ImageBack> = [];
  imageLikeAuthorizateUser: Array<number> = [];
  constructor(
    private frontService: FrontService,
    private backService: BackendService
  ) {}
  like($event, n: number) {
    if (this.imageLikeAuthorizateUser[n] === 0) {
      $event.target.src = 'assets/likeKr.png';
      this.imageLikeAuthorizateUser[n] = 1;
      let user = this.frontService.getAuthorizationUser();
      let userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      console.log(userLikes);
      this.frontService.setUserLike(userLikes);
      console.log('!' , this.frontService.getUserLike())
    } else {
      $event.target.src = 'assets/like.png';
      this.imageLikeAuthorizateUser[n] = 0;
      const user = this.frontService.getAuthorizationUser();
      const userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      this.frontService.setUserLike(userLikes);
      console.log(userLikes);
    }
  }

  enlargedImages($event) {
    console.log($event.target.src);
    this.enrlargedImage = $event.target.src.split('http://localhost:4200/', 2 )[1];
    console.log(this.enrlargedImage);
    this.invertEnlargeVision();
  }
  invertEnlargeVision() {
    this.enlargeVision = !this.enlargeVision;
  }
  ngOnInit(): void {
    this.user = this.frontService.getAuthorizationUser();
    this.imageBack = this.frontService.images;
    if(this.frontService.newImages){
    this.backService.getImage().subscribe((images: Array<ImageBack>) => {
      for (let i = 0; i < images.length; i++) {
        this.imageBack.push(images[i]);
        this.imageLikeAuthorizateUser.push(0);
      }
      this.frontService.images = this.imageBack;
    });
    this.frontService.setUserImage(this.user.id);
    console.log(this.frontService.getUserImage());
  }
    this.frontService.newImages = false;
    const like: UserLikes = this.frontService.getUserLike();
    this.imageLikeAuthorizateUser = like.likes;
    console.log('!!!!!' , this.imageLikeAuthorizateUser);
}
}
