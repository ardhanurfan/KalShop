interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

interface CartModel {
  id: number;
  products: CartItem[];
}

enum CartActionType {
  LOAD_CART = "LOAD_CART",
  CLEAR_CART = "CLEAR_CART",
  ADD_ITEM_CART = "ADD_ITEM_CART",
  EDIT_QTY_CART = "EDIT_QTY_CART",
  REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
}

type CartAction =
  | {
      type: CartActionType.LOAD_CART;
      payload?: CartModel;
    }
  | {
      type: CartActionType.CLEAR_CART;
    }
  | {
      type: CartActionType.ADD_ITEM_CART;
      payload?: CartItem;
    }
  | {
      type: CartActionType.EDIT_QTY_CART;
      payload?: CartItem;
    }
  | {
      type: CartActionType.REMOVE_ITEM_CART;
      payload?: CartItem;
    };

export { CartActionType };
export type { CartModel, CartAction, CartItem };
