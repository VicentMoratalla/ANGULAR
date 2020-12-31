import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  //seting the value to an empty value
  //we should create a blank object
  product: any = {};
  id: string;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { 

    this.categories$ = categoryService.getCategories().snapshotChanges();

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.productService.getProduct(this.id).subscribe(id=>{
        this.product = id;
      })
    }
  }

  ngOnInit(): void {}


  save(product){

    if(this.id) this.productService.updateProduct(this.id, product);
    else this.productService.create(product);

    //better experience to the user
    this.router.navigate(['/admin/products']);

  }
  
  delete(){

    if(!confirm('Are you sure you want to delete this product?')) return;
    
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
  }

}
