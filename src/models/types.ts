import { CartAction, CartModel } from "./cart/types";
import { HistoryAction, HistoryModel } from "./history/types";
import { ProductsModel, ProductsAction } from "./products/types";
import { SearchAction } from "./search/types";

export interface RootModel {
  products?: ProductsModel;
  cart?: CartModel;
  histories?: HistoryModel;
  search?: string;
}

export type RootAction =
  | ProductsAction
  | CartAction
  | HistoryAction
  | SearchAction;
