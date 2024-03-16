import { ProductsActionType } from "./types.js";

import type { Product, ProductsAction, ProductsModel } from "./types.js";

const ProductsReducer = (
  state: ProductsModel = { products: [] },
  action: Readonly<ProductsAction>
): ProductsModel => {
  switch (action.type) {
    case ProductsActionType.GET_PRODUCTS:
      if (action.payload && state.products) {
        const newProducts = action.payload.filter(
          (newProduct) =>
            !state.products!.some(
              (stateProduct) => stateProduct.id === newProduct.id
            )
        );
        return {
          ...state,
          products: [...state.products, ...newProducts].sort(
            (a, b) => a.id - b.id
          ),
        };
      }
      return state;
    case ProductsActionType.GET_INDIVIDUAL_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case ProductsActionType.CLEAR:
      return { products: state.products };
    case ProductsActionType.ADD_PRODUCT:
      if (action.payload && state.products) {
        const newProduct: Product = {
          ...action.payload,
          id: state.products[state.products.length - 1].id + 1,
          rating: 0,
        };
        return { ...state, products: [...state.products, newProduct] };
      }
      return state;
    default:
      return state;
  }
};

export { ProductsReducer };
