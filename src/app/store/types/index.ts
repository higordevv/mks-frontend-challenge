export interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  brand: string;
  description: string;
}

export interface Cart {
  product: Product;
  quantity: number;
}

export interface CartState {
  cart: Cart[];
}

export interface ProductResponseRequest {
  count: number;
  products: Product[];
}
export enum sortBy {
  "id" = "id",
  "name" = "name",
  "price" = "price",
}

export enum orderBy {
  "DESC" = "DESC",
  "ASC" = "ASC",
}

export interface ParamProductRequest {
  page: number;
  rows: number;
  sortBy: sortBy;
  orderBy: orderBy;
}
