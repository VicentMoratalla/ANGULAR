import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  //changed to public to access the user$ Observable
  constructor(public auth: AuthService) {}

  logout(){
    this.auth.logout();
  }

}
