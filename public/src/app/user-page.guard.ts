import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { FrontService } from './service/front.service';
import { Injectable } from '@angular/core';
@Injectable()
export class UserGuard implements CanActivate {
  constructor(private frontService:FrontService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
   if (this.frontService.autorizate){
    this.frontService.autorizate = false;
    return true;
   } else {
     return false;
   }
}
}
