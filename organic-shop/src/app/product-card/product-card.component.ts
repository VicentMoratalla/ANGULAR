import { Component, Input, OnInit } from '@angular/core';
import { isTemplateExpression } from 'typescript';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  //signature of the template simple
  //used to pass a lot of paramterers betwen various functions
  addToCart(){
    //console.log('product ', product);
    this.cartService.addToCart(this.product);
  }
}
