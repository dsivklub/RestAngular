import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';
import { UserLikes, ImageBack } from '../api';

@Component({
  selector: 'app-save-user-images',
  templateUrl: './save-user-images.component.html',
  styleUrls: ['./save-user-images.component.less']
})
export class SaveUserImagesComponent implements OnInit {
  imageLikeAuthorizateUser: Array<number> = [];
  images: Array<String> = [];
  constructor(private frontService: FrontService) { }

  ngOnInit(): void {
    const like: UserLikes = this.frontService.getUserLike();
    this.imageLikeAuthorizateUser = like.likes;
    const images: Array<ImageBack> = this.frontService.images;
    for(let i = 0 ; i < images.length; i++) {
      this.images[i] = images[i].src;
    }
  }

}
