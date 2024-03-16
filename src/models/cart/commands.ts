import { Command, FetchURLOptions } from "@nxweb/core";
import { RootModel } from "@models/types";
import { getAllCart } from "@api/clients/cart";
import { CartAction, CartActionType, CartItem, CartModel } from "./types";

const CartCommand = {
  getCart: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const { id, products } = (await getAllCart(options)) as {
          id: number;
          products: CartItem[];
        };

        if (id && products) {
          const payload: CartModel = {
            id: id,
            products: products,
          };

          dispatch({
            type: CartActionType.LOAD,
            payload,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
  clear: (): CartAction => {
    return {
      type: CartActionType.CLEAR,
    };
  },
  addItem: (item: CartItem) => {
    return {
      type: CartActionType.ADD_ITEM,
      payload: item,
    };
  },
  editQty: (item: CartItem) => {
    return {
      type: CartActionType.EDIT_QTY,
      payload: item,
    };
  },
  removeItem: (item: CartItem) => {
    return {
      type: CartActionType.REMOVE_ITEM,
      payload: item,
    };
  },
} satisfies Command<RootModel, CartAction>;

export { CartCommand };
