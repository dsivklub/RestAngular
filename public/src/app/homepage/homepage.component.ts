import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';
import { User } from '../api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  user: User;
  userName: string;
  counter = 1;
  constructor(private FrontService: FrontService) { }
  translate() {
    const visionArea = document.getElementsByClassName("visual-area") as  HTMLCollectionOf < HTMLElement >;
    const information = document.getElementsByClassName("information") as  HTMLCollectionOf < HTMLElement >;
    const icon = document.getElementsByClassName("menu-icon")as  HTMLCollectionOf < HTMLElement >;
    this.counter++;
    if (this.counter % 2 === 0) {
    information[0].style.transform = "translate(69px,0)";
    } else {
    information[0].style.transform = "translate(-69px,0)";
    }
  }
  ngOnInit(): void {
  this.user = this.FrontService.getAuthorizationUser();
  this.userName = this.user.name;

  }

}
