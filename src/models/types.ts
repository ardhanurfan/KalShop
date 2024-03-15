import { CartAction, CartModel } from "./cart/types";
import { ProductsAction, ProductsModel } from "./kalProducts/types";


export interface RootModel {
  products?: ProductsModel,
  cart?: CartModel
}

export type RootAction = ProductsAction | CartAction;
