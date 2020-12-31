import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  //changed to public to access the user$ Observable
  constructor(
    private auth: AuthService, 
    private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser=> this.appUser = appUser);
    
    //each item has its quantity
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(){
    this.auth.logout();
  }

}
