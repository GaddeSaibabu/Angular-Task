import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    var isAuthenticated =
      localStorage.getItem(Constants.TOKEN_KEY) != null &&
      localStorage.getItem(Constants.TOKEN_KEY) !== '';
    if (!isAuthenticated) {
      this.router.navigate(['/unauthorized']);
    }
    return isAuthenticated;
  }
}
