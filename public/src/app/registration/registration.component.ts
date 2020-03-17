import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray, ValidationErrors} from '@angular/forms';
import {User , UsersGroupFromBack, AvatarUser} from '../api';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  popupVisionError = false;
  registrationControl: FormGroup;
  users: Array<User> = [];
  errors: Array<string> = [];
  BackService: any;
  invertPopupError(): void {
    this.popupVisionError = !this.popupVisionError;
  }

 registrationUser() {
  if (this.registrationControl.valid) {
    const userName = this.registrationControl.controls.name.value;
    const userSurname = this.registrationControl.controls.surname.value;
    const userNickname = this.registrationControl.controls.nickname.value;
    const userMail = this.registrationControl.controls.mail.value;
    const userPassword = this.registrationControl.controls.password.value;
    const newUser: User = {
      name: userName , surname: userSurname , email: userMail ,  nickname: userNickname ,
      passw: userPassword
    };
    this.users.push(newUser);
    this.backService.setUser(newUser).subscribe();
    this.backService.setDefaultAvatarUser().subscribe();
    this.backService.setDefaultSaveFoto().subscribe();
    this.backService.setDefaultInformationUser().subscribe();
    this.registrationControl.reset();
    console.log(this.users);
    this.errors = [];
  } else {
    /*if (this.registrationControl.controls.password.touched && this.registrationControl.controls.password.invalid && this.registrationControl.controls.password.value !== '') {
      // console.log('введён пароль не валидный пароль, минимальная длина пароля 6');
      this.errors.push('Введён пароль не валидный пароль, минимальная длина пароля 6');
    }
    if (this.registrationControl.controls.mail.touched && this.registrationControl.controls.mail.invalid) {
      // console.log('введена не эл почта');
      this.errors.push('введена не эл почта');
    }
    // console.log('!!!!!' , this.registrationControl.controls.mail);
    console.log(this.errors);*/
    this.invertPopupError();
  }
 }
  constructor(private formBuilder: FormBuilder, private backService: BackendService) {
    this.registrationControl = this.formBuilder.group({
      name : ['' , [Validators.required]] ,
      surname : ['', [Validators.required]],
      nickname : ['' , [Validators.required]],
      mail : ['' , [Validators.required , Validators.email]],
      password: ['' , [Validators.required, Validators.minLength(6)]]
    }, {validator: GroupAddValidator});
  }
  ngOnInit() {

  }
}

function GroupAddValidator(control: FormGroup): ValidationErrors|null {
  const name = control.get('name');
  const surname = control.get('surname');
  const nickname = control.get('nickname');
  const mail = control.get('mail');
  const password = control.get('password');
  //if ((name.value === null && name.invalid) && (surname.value === null && surname.invalid) && (nickname.value === null && nickname.invalid) && (mail.value === null && mail.invalid) && (password.value === null && password.invalid)) {
  if (!(name.valid && surname.valid && nickname.valid && mail.valid && password.valid)) {
  //if ( name.untouched || surname.untouched || nickname.untouched  || mail.untouched  || password.untouched ) {
  return {GroupAddValidator : {error1 : 'Не заполнены все поля' }};
  }
  return null;
}

