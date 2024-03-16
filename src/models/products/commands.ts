import type { Command, FetchURLOptions } from "@nxweb/core";

import type { RootModel } from "@models/types.js";

import { ProductsActionType } from "./types.js";

import type { Product, ProductsAction, ProductsModel } from "./types.js";
import { getAllProducts, postProduct } from "@api/clients/products.js";

const ProductsCommand = {
  clear: (): ProductsAction => {
    return {
      type: ProductsActionType.CLEAR,
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
        console.error(err);
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
} satisfies Command<RootModel, ProductsAction>;

export { ProductsCommand };
