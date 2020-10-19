import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() as Product }))
      )
    );
  }
  getProduct(productId){
    return this.db.object('/products/'+ productId).valueChanges();
  }

  updateProduct(productId, product){
    return this.db.object('/products/'+ productId).update(product);
  }

  deleteProduct(productId){
    return this.db.object('/products/'+ productId).remove();
  }
}
