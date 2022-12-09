import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Route, Router, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly _accountService: AccountService,
    private readonly _router: Router
  ) { }

  public canActivate(): Observable<boolean | UrlTree> {
    return of(this._accountService.isAuthorized).pipe(map((isAuthorized) => isAuthorized ? true : this._router.parseUrl('/account/login')));

  };

  public canActivateChild(): Observable<boolean | UrlTree> {
    return this.canActivate();
  };
}
