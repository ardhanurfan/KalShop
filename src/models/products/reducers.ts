import { ProductsActionType } from "./types.js";

import type { Product, ProductsAction, ProductsModel } from "./types.js";

const ProductsReducer = (
  state: ProductsModel = { products: [] },
  action: Readonly<ProductsAction>
): ProductsModel => {
  switch (action.type) {
    case ProductsActionType.GET_PRODUCTS:
      if (action.payload && state.products && state.products.length <= 0) {
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
    case ProductsActionType.SELECT_CURRENT_PRODUCT:
      if (action.payload && state.products) {
        return {
          ...state,
          selectedProduct: state.products.find(
            (product) => product.id === action.payload
          ),
        };
      }
      return state;
    case ProductsActionType.CLEAR_SELECTED_PRODUCT:
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
    case ProductsActionType.DELETE_PRODUCT:
      if (action.payload && state.products) {
        return {
          ...state,
          products: [...state.products.filter((p) => p.id !== action.payload)],
        };
      }
      return state;
    case ProductsActionType.EDIT_PRODUCT:
      if (action.payload && state.products) {
        const index = state.products.findIndex(
          (p) => p.id === action.payload?.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        return {
          ...state,
          products: [...state.products],
        };
      }
      return state;
    default:
      return state;
  }
};

export { ProductsReducer };
