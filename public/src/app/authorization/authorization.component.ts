import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../service/backend.service';
// import {User , UsersGroupFromBack} from '../api';
import { FrontService } from '../service/front.service';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {
  popupVisionError = false;
  errors: Array<string> = [];
  nextPage = false;
  authorizationControl: FormGroup;
  users: Array<User> = [];
  userOnSite: User;
  userFind = false;
  passwTrue = false;
  idUserFind: number;
  authorizationUser() {
    if (this.authorizationControl.valid) {
      this.errors = [];
      const nickname = this.authorizationControl.controls.nickname.value;
      const passw = this.authorizationControl.controls.passw.value;
      for (let i = 0; i < this.users.length; i++) {
        if (nickname === this.users[i].nickname) {
          this.userFind = true;
          this.idUserFind = i;
          break;
        }
      }
      if(this.userFind) {
      if (passw === this.users[this.idUserFind].passw) {
        this.passwTrue = true;
        this.frontService.setAutorizate();
        const newUser: User = {
          id: this.users[this.idUserFind].id,
          name: this.users[this.idUserFind].name,
          surname: this.users[this.idUserFind].surname,
          email: this.users[this.idUserFind].email,
          nickname: this.users[this.idUserFind].nickname,
          passw: this.users[this.idUserFind].passw
        };
        this.userOnSite = newUser;
        this.frontService.setAuthorizationUser(newUser);
        this.nextPage = true;
        this.authorizationControl.reset();
      }
    }
      if (!this.userFind) {
        this.popupVisionError = true;
        this.errors.push('Пользователь с данным логином не существует');
        this.authorizationControl.reset();
      }
      if (!this.passwTrue && this.userFind) {
        this.popupVisionError = true;
        this.errors.push('Введён неверный пароль пользователя');
        this.authorizationControl.controls.passw.reset();
      }
      console.log('Ваш пользователь', this.userOnSite);
      this.frontService.setAuthorizationUser(this.userOnSite);
      console.log(this.errors);
    }
  }

  invertErrorVision() {
    this.popupVisionError = !this.popupVisionError;
  }

  constructor(
    private formBuilder: FormBuilder,
    private BackService: BackendService,
    private frontService: FrontService
  ) {
    this.authorizationControl = this.formBuilder.group({
      nickname: ['', [Validators.required]],
      passw: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // загрузка пользователей с бэка
    this.BackService.getUsersFromBack().subscribe((users: Array<User>) => {
      for (let i = 0; i < users.length; i++) {
        const newUser: User = {
          id: users[i].id,
          name: users[i].name,
          surname: users[i].surname,
          email: users[i].email,
          nickname: users[i].nickname,
          passw: users[i].passw
        };
        console.log(newUser);
        this.users.push(newUser);
      }
      console.log(this.users);
      this.frontService.setUsers(this.users);
    });
  }
}
