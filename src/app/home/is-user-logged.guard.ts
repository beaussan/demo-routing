import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedGuard implements CanActivate, CanActivateChild {

  constructor(private readonly authService: AuthService,
              private readonly router: Router,) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAllGood$();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAllGood$();
  }

  private isAllGood$(): Observable<boolean> {
    return this.authService.getAuthState$().pipe(
        map(value => (value !== undefined) && (value !== null)),
        tap(isLogged => {
          if (!isLogged) {
            this.router.navigate(['login']);
          }
        }),
    )
  }

}
