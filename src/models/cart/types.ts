interface CartItem {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number, 
    thumbnail: string
}

interface CartModel {
    id: number,
    products: CartItem[]
}

enum CartActionType {
    LOAD = "LOAD",
    CLEAR = "CLEAR",
    ADD_ITEM = "ADD_ITEM",
    EDIT_QTY = "EDIT_QTY",
    REMOVE_ITEM = "REMOVE_ITEM"
}

type CartAction = {
    type: CartActionType.LOAD,
    payload?: CartModel
} | {
    type: CartActionType.CLEAR
} | {
    type: CartActionType.ADD_ITEM,
    payload?: CartItem
} | {
    type: CartActionType.EDIT_QTY,
    payload?: CartItem
} | {
    type: CartActionType.REMOVE_ITEM,
    payload?: CartItem
}

export { CartActionType }
export type { CartModel, CartAction, CartItem }