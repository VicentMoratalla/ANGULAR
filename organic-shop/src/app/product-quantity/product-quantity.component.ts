import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  //signature of the template simple
  //used to pass a lot of paramterers betwen various functions
  addToCart(){
    //console.log('product ', product);
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
}
