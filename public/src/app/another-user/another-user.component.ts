import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { FrontService } from '../service/front.service';
import { InformationUser, AvatarUser, ImageBack, UserLikes } from '../api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-another-user',
  templateUrl: './another-user.component.html',
  styleUrls: ['./another-user.component.less']
})
export class AnotherUserComponent implements OnInit {

  informationVision = false;
  popupVisionError = false;
  popupVisionDelete = true;
  informationVisionDelete = false;
  userImage: Array<ImageBack> = [];
  imageLikeAuthorizateUser: Array<number> = [];
  userAvatar: string;
  visionInformation = false;
  contentUserInterests1: string;
  contentUserInterests2: string;

  constructor(private backService: BackendService , private frontService: FrontService) { }
  invertPopupError() {
    this.popupVisionError = !this.popupVisionError;
  }
  invertInformationVisionDelete() {
    this.informationVisionDelete = !this.informationVisionDelete;
  }
  invertInformationVision() {
    this.informationVision = !this.informationVision;
  }
  invertVisionInformation() {
  this.visionInformation = !this.visionInformation;
  }

  ngOnInit(): void {
    console.log('anotheer' , this.frontService.getAnotherUserId());
    this.backService.getImage().subscribe((images: Array<ImageBack>) => {
      for (let i = 0 ; i < images.length ; i++) {
        if (images[i].id === this.frontService.getAnotherUserId()) {
        images[i].idFoto = (+images[i].idFoto - 1).toString();
        this.userImage.push(images[i]);
        //console.log(this.userImage);
        }
      }
    });

    this.backService.getAvatarUser(this.frontService.getAnotherUserId()).subscribe(
      (avatar: AvatarUser) => {
        this.userAvatar = avatar.avatar;
      });
    this.backService.getInformationUser(this.frontService.getAnotherUserId()).subscribe(
      (information: InformationUser) => {
        this.contentUserInterests1 = information.userFotoInformation;
        this.contentUserInterests2 = information.userInformation;
      }
      );
    this.backService.getInformationUser(this.frontService.getAnotherUserId()).subscribe((information: InformationUser) => {
        this.contentUserInterests1 = information.userFotoInformation;
        this.contentUserInterests2 = information.userInformation;
      });
    // this.userImage = this.frontService.getUserImage();
    const like: UserLikes = this.frontService.getUserLike();
    this.imageLikeAuthorizateUser = like.likes;
  }

}
