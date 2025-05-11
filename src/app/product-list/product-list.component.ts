import { Component, OnInit } from '@angular/core';
import { Country, District, ProductCategory, State } from './model/product-category';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategories, ProductService } from './services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productData!: ProductCategories[];
  groups: ProductCategories[] = [];
  category: ProductCategories[] = [];
  subCategory: ProductCategories[] = [];

  


  constructor(
    private _fb: FormBuilder,
    private _service: ProductService
  ){

  }

  ngOnInit(): void {
    // this.productData = [
    //   { id: 1, name: 'Electronics', parentId: null, typeId: 1 },
    //   { id: 2, name: 'Clothes', parentId: null, typeId: 1 },
    //   { id: 3, name: 'Sports', parentId: null, typeId: 1 },
    //   { id: 4, name: 'Refrezarator', parentId: 1, typeId: 2 },
    //   { id: 5, name: 'Women Cloths', parentId: 2, typeId: 2 },
    //   { id: 6, name: 'Cricket Bat', parentId: 3, typeId: 2 },
    //   { id: 7, name: 'Smartphone', parentId: 1, typeId: 2 },
    //   { id: 8, name: 'Men Cloths', parentId: 2, typeId: 2 },
    //   { id: 9, name: 'Footwear', parentId: 3, typeId: 2 },
    //   { id: 10, name: 'Walton', parentId: 4, typeId: 3 },
    //   { id: 11, name: 'Singer', parentId: 4, typeId: 3 },
    //   { id: 12, name: 'Jeans & Top', parentId: 5, typeId: 3 },
    //   { id: 13, name: 'Women shoes', parentId: 5, typeId: 3 },
    //   { id: 14, name: 'CA', parentId: 6, typeId: 3 },
    //   { id: 15, name: 'DSC', parentId: 6, typeId: 3 },
    //   { id: 16, name: 'Samsung', parentId: 7, typeId: 3 },
    //   { id: 17, name: 'Realme', parentId: 7, typeId: 3 },
    //   { id: 18, name: 'T-Shirt', parentId: 8, typeId: 3 },
    //   { id: 19, name: 'Shirt', parentId: 8, typeId: 3 },
    //   { id: 20, name: 'Nike', parentId: 9, typeId: 3 },
    //   { id: 21, name: 'Addidas', parentId: 9, typeId: 3 },
    // ];


    this.getGroup();

  }

  // getGroup(){
  //   this.groups = this.productData.filter(x => x.typeId === 1);
  // }

  getGroup(){
    this.groups = this._service.getItemByType(1);
  }

  // onGroupChange(event: Event){
  //   const groupId = (event.target as HTMLSelectElement).value;
  //   this.category = this.productData.filter(x => x.typeId === 2 && x.parentId === Number(groupId));
  //   this.subCategory = [];
  // }

  onGroupChange(event: Event){
    const groupId = Number((event.target as HTMLSelectElement).value);
    this.category = this._service.getItemByParentAndType(2, groupId);
    this.subCategory = [];
  }


  // onCategoryChange(event: Event){
  //   const categoryId = (event.target as HTMLSelectElement).value;
  //   this.subCategory = this.productData.filter(x => x.typeId === 3 && x.parentId === Number(categoryId));
  // }

  onCategoryChange(event: Event){
    const categoryId = Number((event.target as HTMLSelectElement).value);
    this.subCategory = this._service.getItemByParentAndType(3, categoryId);
  }


}
