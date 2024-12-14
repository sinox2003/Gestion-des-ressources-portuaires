import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthenticationService);
  const authorities=authService.getCurrentAuthUser().authorities
  if(!authorities.some((a:{authority:string}) => a.authority === route.data["authority"])){
    return false;
  }else {
    return true;
  }
};
