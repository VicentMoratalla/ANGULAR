import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //not proper abstraction so we have to create a new class
  user$: Observable<firebase.User>;
  
  //we are gonna use a class from angular fire
  constructor(private afAuth: AngularFireAuth) { 
    //observable represents the authentication state of the current user
    this.user$ = afAuth.authState;
  }

  login(){
    //what about dependency injection 
    //should be extracted to a service
    //lack of separation of concerns
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    //very simple
    this.afAuth.auth.signOut();
  }
}
