export class ProductCategory {
    id?: number;
    name?: string;
    parentId?: number | null;
    typeId?: ProductCategoryType;
}

export enum ProductCategoryType {
    Group = 1,
    Category = 2,
    Subcategory = 3
}

export class Country{
    id?: number;
    name?: string;
}

export class State{
    id?: number;
    name?: string;
    countryId?: number;
}

export class District{
    id?: number;
    name?: string;
    stateId?: number;
}