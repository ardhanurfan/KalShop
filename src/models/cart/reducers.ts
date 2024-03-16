import { CartAction, CartActionType, CartModel } from "./types";

const CartReducers = (
  state: CartModel = { id: 0, products: [] },
  action: Readonly<CartAction>
): CartModel => {
  switch (action.type) {
    case CartActionType.LOAD:
      return { ...state, ...action.payload };
    case CartActionType.CLEAR:
      return { id: 0, products: [] };
    case CartActionType.ADD_ITEM: {
      if (!action.payload) {
        throw new Error("Item can not be null");
      }

      const {
        id,
        title,
        price,
        discountPercentage,
        discountedPrice,
        thumbnail,
      } = action.payload;
      const filtered = state.products.filter((item) => item.id !== id);

      const exist = state.products.find((item) => item.id === id);

      const quantity: number = exist ? exist.quantity + 1 : 1;
      const total = quantity * discountedPrice;

      return {
        ...state,
        products: [
          ...filtered,
          {
            id,
            title,
            price,
            discountPercentage,
            discountedPrice,
            thumbnail,
            quantity,
            total,
          },
        ],
      };
    }
    case CartActionType.EDIT_QTY: {
      if (!action.payload) {
        throw new Error("Item to change can not be null");
      }

      const updated = state.products.find(
        (item) => item.id === action.payload?.id
      );
      if (!updated) {
        throw new Error("Item must be exist in order to change the quantity");
      }

      const { quantity } = action.payload;
      const total = quantity * action.payload.discountedPrice;

      const updatedCart = state.products.map((item) => {
        if (item.id === updated.id) return { ...item, quantity, total };
        return item;
      });

      return { ...state, products: updatedCart };
    }
    case CartActionType.REMOVE_ITEM: {
      if (!action.payload) {
        throw new Error("Item can not be null");
      }

      const filtered = state.products.filter(
        (item) => item.id !== action.payload?.id
      );

      return { ...state, products: [...filtered] };
    }
    default:
      return state;
  }
};

export { CartReducers };
