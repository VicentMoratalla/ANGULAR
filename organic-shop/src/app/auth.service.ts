import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //not proper abstraction so we have to create a new class
  user$: Observable<firebase.User>;
  
  //we are gonna use a class from angular fire
  constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private userService: UserService) { 
    //observable represents the authentication state of the current user
    this.user$ = afAuth.authState;
  }

  login(){
    //snapshot because route params are not gonna change
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    //save it in local storage
    localStorage.setItem('returnUrl', returnUrl);

    //what about dependency injection 
    //should be extracted to a service
    //lack of separation of concerns
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    //very simple
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser>{
    return this.user$.pipe(
      //we map and switch to a new observable return for user service
      switchMap((user) =>
        {
          if (user) return this.userService.get(user.uid).valueChanges();

          return of(null);
          
        }
      ))
  }
}
