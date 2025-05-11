import { ProductDetailModel, ProductStockModel } from ".";


export class ProductModel {
    id?: number;
    name?: string;
    category?: string;
    price?: number;
    details?: ProductDetailModel[] = [];
    stock?: ProductStockModel[] = [];
}