import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray, ValidationErrors} from '@angular/forms';
import {User , UsersGroupFromBack} from '../api';
// import { BackendService } from './backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  popupVisionError = false;
  registrationControl: FormGroup;
  check: Array<boolean> = [false , false , false , false , false];
  Users: Array<User> = [];
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
    this.Users.push(newUser);
    this.registrationControl.reset();
    console.log(this.Users);
    // this.backend.getUserFromFront(this.Users);
    //this.backend.setBack(newUser);
    //this.backend.getFromBack().subscribe((students: Array<User>) => {
    //  for( let i = 0 ; i < students.length ; i++) {
   //   console.log(students[i]);
   //   console.log('bil tyt');
   //   if(newUser.name === students[i].name && newUser.surname === students[i].surname){
   //     console.log("Сошлись");
   //   } else {
    //    console.log("Не сошлись");
   //   }
    //  }
   // })
  } else {
    this.invertPopupError();
  }
 }
  constructor(private formBuilder: FormBuilder) {
    this.registrationControl = this.formBuilder.group({
      name : ['' , [Validators.required]] ,
      surname : ['', [Validators.required]],
      nickname : ['' , [Validators.required]],
      mail : ['' , [Validators.required , Validators.email]],
      password: ['' , [Validators.required]]
    }, {validator: GroupAddValidator});
  }
  ngOnInit() {

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

