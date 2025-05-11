export class ProductCategoryList {
    id?: number;
    name?: string;
    parentId?: number | null;
    typeId?: ProductCategoryType;
}

enum ProductCategoryType {
    Group = 1,
    Category = 2,
    Subcategory = 3
}