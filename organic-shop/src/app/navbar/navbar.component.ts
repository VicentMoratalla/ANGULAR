import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  appUser: AppUser;

  //changed to public to access the user$ Observable
  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(appUser=> this.appUser = appUser);
  }

  logout(){
    this.auth.logout();
  }

}
