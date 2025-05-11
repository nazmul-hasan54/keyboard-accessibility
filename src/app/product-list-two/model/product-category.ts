export class ProductsCategoryData {
    id?: number;
    name?: string;
    typeId?: ProductCategoryTypeEnum;
    parentId?: number | null;
}

enum ProductCategoryTypeEnum {
    Group = 1,
    Category = 2,
    Subcategory = 3
}