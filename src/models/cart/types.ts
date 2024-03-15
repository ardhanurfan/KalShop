interface CartItemType {
    id: number
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    qty: number
}

interface CartModel {
    cart?: CartItemType[]
}

enum CartActionType {
    ADD_ITEM = "ADD_ITEM",
    EDIT_QTY = "EDIT_QTY",
    REMOVE_ITEM = "REMOVE_ITEM",
    SUBMIT = "SUBMIT",
}

type CartAction = {
    type: CartActionType.ADD_ITEM,
    payload?: CartItemType
} | {
    type: CartActionType.EDIT_QTY,
    payload?: CartItemType
} | {
    type: CartActionType.REMOVE_ITEM,
    payload?: CartItemType
} | {
    type: CartActionType.SUBMIT
}

export { CartActionType }
export type { CartModel, CartAction, CartItemType }