import type { Command, FetchURLOptions } from "@nxweb/core";

import type { RootModel } from "@models/types.js";

import { ProductsActionType } from "./types.js";

import type { Product, ProductsAction, ProductsModel } from "./types.js";
import { getAllProducts } from "@api/clients/products.js";

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
          const payload: ProductsModel = {
            products: products,
          };

          dispatch({
            type: ProductsActionType.GET_PRODUCTS,
            payload,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
} satisfies Command<RootModel, ProductsAction>;

export { ProductsCommand };
