import { Component, OnInit} from '@angular/core';
import { FrontService } from '../service/front.service';
import {   UserLikes, ImageBack, AvatarUser, InformationUser } from '../api';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
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
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.less'],
})
export class UserHomePageComponent implements OnInit {
  informationUser: FormGroup;
  informationVision = false;
  edditingVision = true;
  authorizateUser: User;
  popupVisionError = false;
  popupVisionDelete = true;
  informationVisionDelete = false;
  userImage: Array<String> = [];
  imageLikeAuthorizateUser: Array<number> = [];
  userAvatar: string;
  visionInformation = false;
  contentUserInterests1: string;
  contentUserInterests2: string;
  constructor(private formBuilder: FormBuilder , private frontService: FrontService , private backService: BackendService) {

   }
  changeUserInformation() {
    if (this.informationUser.valid) {
    const newUser: User = {
      id: this.authorizateUser.id,
      name: this.informationUser.controls.name.value,
      surname: this.informationUser.controls.surname.value,
      email: this.informationUser.controls.mail.value,
      nickname: this.informationUser.controls.nickname.value,
      passw: this.informationUser.controls.password.value
    };
    console.log(newUser);
    this.backService.changeUserInformation(newUser);
    this.frontService.setAuthorizationUser(newUser);
    this.authorizateUser = this.frontService.getAuthorizationUser();
    console.log('Ваш пользователь сейчас', this.authorizateUser);
    this.invertInformationVision();
  } else {
    this.invertPopupError();
  }
  }
  deleteUser() {
    this.backService.deleteUser(this.authorizateUser);
  }
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
  sendInformation() {
    const information: InformationUser =  {
      id: this.authorizateUser.id,
      userFotoInformation: this.contentUserInterests1,
      userInformation: this.contentUserInterests2
    };
    this.backService.setInformationUser(this.frontService.getAuthorizationUser().id , information);
  }
  ngOnInit(): void {
    this.authorizateUser = this.frontService.getAuthorizationUser();
    console.log(this.userImage);
    this.informationUser = this.formBuilder.group({
      name : [this.authorizateUser.name , [Validators.required]] ,
      surname : [this.authorizateUser.surname, [Validators.required]],
      nickname : [this.authorizateUser.nickname, [Validators.required]],
      mail : [this.authorizateUser.email, [Validators.required , Validators.email]],
      password: [this.authorizateUser.passw]
    } , {validator: GroupAddValidator});
    this.userImage = this.frontService.getUserImage();
    const like: UserLikes = this.frontService.getUserLike();
    this.imageLikeAuthorizateUser = like.likes;
    this.backService.getAvatarUser(this.frontService.getAuthorizationUser().id).subscribe(
      (avatar: AvatarUser) => {
        this.userAvatar = avatar.avatar;
        console.log(this.userAvatar);
      });
    this.backService.getInformationUser(this.frontService.getAuthorizationUser().id).subscribe(
        (information: InformationUser) => {
          this.contentUserInterests1 = information.userFotoInformation;
          this.contentUserInterests2 = information.userInformation;
        }
        );
/*
this.informationUser = this.formBuilder.group({
  name : ['' , [Validators.required]] ,
  surname : ['', [Validators.required]],
  nickname : ['', [Validators.required]],
  mail : ['', [Validators.required , Validators.email]],
  password: ['']
} , {validator: GroupAddValidator});
*/
}

}

function GroupAddValidator(control: FormGroup): ValidationErrors|void {
  const name = control.get('name');
  const surname = control.get('surname');
  const nickname = control.get('nickname');
  const mail = control.get('mail');
  const password = control.get('password');
  if (!(name.valid && surname.valid && nickname.valid && mail.valid && password.valid)) {
   return {GroupAddValidator : {error1 : 'Не заполнены все поля' }};
  }
  return null;
}
