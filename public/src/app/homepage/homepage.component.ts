import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';
import { User } from '../api';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  user: User;
  userName: string;
  counter = 1;
  constructor(private frontService: FrontService , private backend: BackendService ) { }
  translate() {
    const visionArea = document.getElementsByClassName("visual-area") as  HTMLCollectionOf < HTMLElement >;
    const information = document.getElementsByClassName("information") as  HTMLCollectionOf < HTMLElement >;
    const icon = document.getElementsByClassName("menu-icon")as  HTMLCollectionOf < HTMLElement >;
    this.counter++;
    if (this.counter % 2 === 0) {
    information[0].style.transform = "translate(65px,0)";
    } else {
    information[0].style.transform = "translate(-65px,0)";
    }
  }
  ngOnInit(): void {
  }

}
