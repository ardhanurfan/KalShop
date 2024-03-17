import type { Command, FetchURLOptions } from "@nxweb/core";

import type { RootModel } from "@models/types.js";

import { ProductsActionType } from "./types.js";

import type { Product, ProductsAction, ProductsModel } from "./types.js";
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  putProduct,
} from "@api/clients/products.js";

const ProductsCommand = {
  clear: (): ProductsAction => {
    return {
      type: ProductsActionType.CLEAR_SELECTED_PRODUCT,
    };
  },
  getAllProducts: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const { products } = (await getAllProducts(options)) as {
          products: Product[];
        };

        if (products) {
          dispatch({
            type: ProductsActionType.GET_PRODUCTS,
            payload: products,
          });
        }
      } catch (err) {
        throw err;
      }
    };
  },
  selectCurrentProduct: (id: number) => {
    return async (dispatch) => {
      try {
        if (id) {
          dispatch({
            type: ProductsActionType.SELECT_CURRENT_PRODUCT,
            payload: id,
          });
        }
      } catch (err) {
        throw err;
      }
    };
  },
  addProduct: (product: Product, options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const res = await postProduct(product, options);
        if (res.data) {
          dispatch({
            type: ProductsActionType.ADD_PRODUCT,
            payload: product,
          });
        }
      } catch (err) {
        throw err;
      }
    };
  },
  deleteProduct: (id: number, options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const res = await deleteProduct(id, options);
        if (res.data) {
          dispatch({
            type: ProductsActionType.DELETE_PRODUCT,
            payload: id,
          });
        }
      } catch (err) {
        throw err;
      }
    };
  },
  editProduct: (product: Product) => {
    return async (dispatch) => {
      try {
        // const res = await putProduct(product);
        // console.log(res.data);
        // if (res.data) {
        dispatch({
          type: ProductsActionType.EDIT_PRODUCT,
          payload: product,
        });
        // }
      } catch (err) {
        throw err;
      }
    };
  },
} satisfies Command<RootModel, ProductsAction>;

export { ProductsCommand };
