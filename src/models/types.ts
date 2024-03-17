import { CartAction, CartModel } from "./cart/types";
import { ProductsModel, ProductsAction, Product } from "./products/types";

export interface RootModel {
  products?: ProductsModel;
  cart?: CartModel;
}

export type RootAction = ProductsAction | CartAction;
