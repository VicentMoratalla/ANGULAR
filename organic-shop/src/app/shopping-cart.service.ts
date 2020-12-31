import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Product } from './models/product';
import { ShoppingCart } from './models/shopping-cart';
import { ShoopingCartItem } from './models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }


  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getorCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges().pipe(
      map((x: any) => new ShoppingCart(x.items))
    );
  }

  async clearCart() {
    let cartId = await this.getorCreateCartId();

    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  async addToCart(product: Product) {

    // let cartId = await this.getorCreateCartId();
    // let item$ = this.getItem(cartId, product.key);

    // item$.valueChanges().pipe(take(1)).subscribe((item: any) => {

    //   //performance overheadincluding product
    //   if(item) item$.update({product: product, quantity: item.quantity + 1});
    //   else item$.update({ product: product, quantity: 1 });
    // });

    this.udapteItem(product, 1);

  }

  async removeFromCart(product: Product) {

    // let cartId = await this.getorCreateCartId();
    // let item$ = this.getItem(cartId, product.key);

    // item$.valueChanges().pipe(take(1)).subscribe((item: any) => {

    //   //performance overheadincluding product
    //   if(item) item$.update({product: product, quantity: item.quantity - 1});

    // });
    this.udapteItem(product, -1);

  }

  private getItem(cartId: string, producId: string) {
    return this.db.object('shopping-carts/' + cartId + '/items/' + producId);
  }

  private async getorCreateCartId(): Promise<string> {
    let cardId = localStorage.getItem('cardId');
    //with no shopping cart
    if (cardId) return cardId;

    let result = await this.create();
    localStorage.setItem('cardId', result.key);
    return result.key;
  }

  private async udapteItem(product: Product, change: number) {

    let cartId = await this.getorCreateCartId();
    let item$ = this.getItem(cartId, product.key);

    item$.valueChanges().pipe(take(1)).subscribe((item: any) => {
      //performance overheadincluding product
      let quantity = (item?.quantity || 0) + change;
      if(quantity === 0) item$.remove();
      else item$.update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: (item?.quantity || 0) + change
      });
    });
  }
}


