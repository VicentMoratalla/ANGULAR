import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, switchMap, take } from 'rxjs/operators';
import { UserService } from './user.service';
import * as firebase from 'firebase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {

    //we start with this user Observable 
    return this.auth.appUser$.pipe(
      //we map the results to a appUser and map the results to a boolean
      map(appUser=> appUser.isAdmin));

  }
}
