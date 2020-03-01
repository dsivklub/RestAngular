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
  constructor(private FrontService: FrontService) { }

  ngOnInit(): void {
  this.user = this.FrontService.getAuthorizationUser();
  this.userName = this.user.name;
  }

}
