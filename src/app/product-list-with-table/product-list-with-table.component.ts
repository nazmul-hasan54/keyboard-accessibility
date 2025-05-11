import { Component, OnInit } from '@angular/core';
import { ProductCategoryList } from './model/product-category-list';
import { ProductListWithTableService } from './service/product-list-with-table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-with-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-list-with-table.component.html',
  styleUrl: './product-list-with-table.component.css'
})
export class ProductListWithTableComponent implements OnInit {
  groups: ProductCategoryList[] = [];

  constructor(
    private _service: ProductListWithTableService
  ){}

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(){
    this.groups = this._service.getProductByType(1);
  }
}
