import { Command } from "@nxweb/core"
import { CartActionType, CartItemType } from "./types"
import { RootModel } from "@models/types"
import { ProductsAction } from "@models/kalProducts/types"

const CartCommand = {
    addItem: (product: CartItemType) => {
        return {
            type: CartActionType.ADD_ITEM,
            payload: product
        }
    },
    editQty: (product: CartItemType) => {
        return {
            type: CartActionType.EDIT_QTY,
            payload: product
        }
    },
    removeItem: (product: CartItemType) => {
        return {
            type: CartActionType.REMOVE_ITEM,
            payload: product
        }
    },
    submit: () => {
        return {
            type: CartActionType.SUBMIT
        }
    }
} satisfies Command<RootModel, ProductsAction>

export { CartCommand }