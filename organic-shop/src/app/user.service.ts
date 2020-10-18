import { Injectable } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject  } from "angularfire2/database"; 
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name:user.displayName,
      email: user.email
    });
  }

  //properly annotate this method
  get(uid: string): AngularFireObject <AppUser>{
    return this.db.object('/users/'+ uid);
  }

}
