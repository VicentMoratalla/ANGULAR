import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  //products$;
  //generally speaking is good to initialize the arrays
  products: Product[] = [];
  filteredProducts: Product[];

  //keep this value here but I make it an INPUT
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart());
    this.populateProducts();

  }

  private populateProducts(){
    //2 async observables operations and we dont see any products at the beginning
    this.productService
      .getAll().subscribe(products => {
        this.products = products;
        //nested observables switchmap operator
        this.route.queryParamMap.subscribe(params => {
          //don't use snapshot beacuse the parameter changes
          this.category = params.get('category');
          this.applyFilter();
        });
      });
  }

  private applyFilter() {
    //now filtering our products
    //we cant use product$
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
  }
}
