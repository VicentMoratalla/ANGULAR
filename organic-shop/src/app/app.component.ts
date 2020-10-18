import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router, private userService: UserService){
    //there is no unsubscribe and it can lead to memory leaks
    auth.user$.subscribe(user => {
      if (user){
        
        //not very good apporach as the user is saved any time
        //we want to save it when the user updates his/her name
        
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        //navigate to the returnUrl variable
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
