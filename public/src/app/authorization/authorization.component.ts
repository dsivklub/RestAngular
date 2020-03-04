import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../service/backend.service";
// import {User , UsersGroupFromBack} from '../api';
import { FrontService } from "../service/front.service";

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

interface UsersGroupFromBack {
  id: number;
  user: User;
}

@Component({
  selector: "app-authorization",
  templateUrl: "./authorization.component.html",
  styleUrls: ["./authorization.component.less"]
})
export class AuthorizationComponent implements OnInit {
  errors: Array<string> = [];
  nextPage: boolean = false;
  authorizationControl: FormGroup;
  users: Array<User> = [];
  userOnSite: User;
  authorizationUser() {
    if (this.authorizationControl.valid) {
      const nickname = this.authorizationControl.controls.nickname.value;
      const passw = this.authorizationControl.controls.passw.value;
      for (let i = 0; i < this.users.length; i++) {
        if (nickname === this.users[i].nickname) {
          if (passw === this.users[i].passw) {
            const newUser: User = {
              id: this.users[i].id,
              name: this.users[i].name,
              surname: this.users[i].surname,
              email: this.users[i].email,
              nickname: this.users[i].nickname,
              passw: this.users[i].passw
            };
            this.userOnSite = newUser;
            this.FrontService.setAuthorizationUser(newUser);
            this.nextPage = true;
            this.authorizationControl.reset();
            break;
          }
          } else {
            this.errors.push("Пользователь с данным логином не существует");
            break;
          }
          this.errors.push("Введён неверный пароль пользователя");

      }
      console.log("Ваш пользователь", this.userOnSite);
      console.log(this.errors);
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private BackService: BackendService,
    private FrontService: FrontService
  ) {
    this.authorizationControl = this.formBuilder.group({
      nickname: ["", [Validators.required]],
      passw: ["", [Validators.required]]
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
    });
  }
}
