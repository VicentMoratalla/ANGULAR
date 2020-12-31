import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input('category') category;
  categories$;

  constructor(categoryService: CategoryService,) {
    this.categories$ = categoryService.getCategories().snapshotChanges();
   }

  ngOnInit(): void {
  }

}
