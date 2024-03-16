import { ProductsActionType } from "./types.js";

import type { ProductsAction, ProductsModel } from "./types.js";

const ProductsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  switch (action.type) {
    case ProductsActionType.GET_PRODUCTS:
      return { ...state, ...action.payload };
    case ProductsActionType.GET_INDIVIDUAL_PRODUCT:
      return {};
    case ProductsActionType.CLEAR:
      return {};
    default:
      return state;
  }
};

export { ProductsReducer };
