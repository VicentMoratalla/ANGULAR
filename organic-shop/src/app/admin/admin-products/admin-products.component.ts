import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DataTableResource } from 'angular-4-data-table';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  //a lot of product array
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  // tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products=>  {
        this.filteredProducts = this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]){
    // this.tableResource = new DataTableResource(products);
    // //get items in page one
    // this.tableResource.query({ offset: 0 })
    //   .then(items => this.items = items);
    //   this.tableResource.count()
    //     .then(count=> this.itemCount = count );
  }

  //reload is called imediatly 
  // reloadItems(params){
  //   //wanna quit if this is null or falsy
  //   if(!this.tableResource) return;
  //   this.tableResource.query(params)
  //   .then(items => this.items = items);
  // }

  ngOnInit(): void {}

  filter(query: string){
    this.filteredProducts = (query) ? 
      this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); 
  }
}
