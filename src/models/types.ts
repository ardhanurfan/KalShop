import { CartAction, CartModel } from "./cart/types";
import { ProductsModel, ProductModel, ProductsAction } from "./products/types";

export interface RootModel {
  products?: ProductsModel;
  cart?: CartModel;
  product?: ProductModel;
}

export type RootAction = ProductsAction | CartAction;
