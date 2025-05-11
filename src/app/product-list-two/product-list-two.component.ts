import { Component, OnInit } from '@angular/core';
import { ProductsCategoryData } from './model';
import { ProductCategoryService } from './services';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-product-list-two',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-list-two.component.html',
  styleUrl: './product-list-two.component.css'
})
export class ProductListTwoComponent implements OnInit {
  groups: ProductsCategoryData[] = [];
  category: ProductsCategoryData[] = [];
  subCategory: ProductsCategoryData[] = [];

  groupControl = new FormControl();
  categoryControl = new FormControl();

  constructor(
    private _service: ProductCategoryService
  ){

  }

  private productData: ProductsCategoryData[] = [
    { id: 1, name: 'Electronics', parentId: null, typeId: 1 },
    { id: 2, name: 'Clothes', parentId: null, typeId: 1 },
    { id: 3, name: 'Sports', parentId: null, typeId: 1 },
    { id: 4, name: 'Refrezarator', parentId: 1, typeId: 2 },
    { id: 5, name: 'Women Cloths', parentId: 2, typeId: 2 },
    { id: 6, name: 'Cricket Bat', parentId: 3, typeId: 2 },
    { id: 7, name: 'Smartphone', parentId: 1, typeId: 2 },
    { id: 8, name: 'Men Cloths', parentId: 2, typeId: 2 },
    { id: 9, name: 'Footwear', parentId: 3, typeId: 2 },
    { id: 10, name: 'Walton', parentId: 4, typeId: 3 },
    { id: 11, name: 'Singer', parentId: 4, typeId: 3 },
    { id: 12, name: 'Jeans & Top', parentId: 5, typeId: 3 },
    { id: 13, name: 'Women shoes', parentId: 5, typeId: 3 },
    { id: 14, name: 'CA', parentId: 6, typeId: 3 },
    { id: 15, name: 'DSC', parentId: 6, typeId: 3 },
    { id: 16, name: 'Samsung', parentId: 7, typeId: 3 },
    { id: 17, name: 'Realme', parentId: 7, typeId: 3 },
    { id: 18, name: 'T-Shirt', parentId: 8, typeId: 3 },
    { id: 19, name: 'Shirt', parentId: 8, typeId: 3 },
    { id: 20, name: 'Nike', parentId: 9, typeId: 3 },
    { id: 21, name: 'Addidas', parentId: 9, typeId: 3 },
];

  ngOnInit(): void {
    this.groups = this._service.getProductByType(1);

    this.groupControl.valueChanges.subscribe(groupId => {
      this.onGroupChange(groupId);
    });

    this.categoryControl.valueChanges.subscribe(categoryId => {
      this.onCategoryChange(categoryId);
    });
  }

  onGroupChange(groupId: number){
    this.category = this.productData.filter(x => x.typeId === 2 && x.parentId === groupId);
  }

  onCategoryChange(categoryId: number){
    this.subCategory = this.productData.filter(x => x.typeId === 3 && x.parentId === categoryId);
  }
}
