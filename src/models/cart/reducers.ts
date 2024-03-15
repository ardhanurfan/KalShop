import { CartAction, CartActionType, CartItemType, CartModel } from "./types";


export const initState = {
    cart: [
        {
            id: 1,
            title: 'Product A',
            description: 'This is the desc for product A',
            price: 50,
            discountPercentage: 10,
            rating: 4.5,
            stock: 10,
            brand: 'Brand A',
            category: 'Category A',
            thumbnail: "https://cdn.dummyjson.com/product-images/1/3.jpg",
            qty: 2
        },
        {
            id: 2,
            title: 'Product A',
            description: 'This is the desc for product A',
            price: 50,
            discountPercentage: 10,
            rating: 4.5,
            stock: 10,
            brand: 'Brand A',
            category: 'Category A',
            thumbnail: "https://cdn.dummyjson.com/product-images/1/3.jpg",
            qty: 2
        }
    ]
}
const CartReducers = (
    state: CartModel= initState,
    action: Readonly<CartAction>
): CartModel => {
    switch(action.type) {
        case CartActionType.ADD_ITEM: {
            if(!action.payload) {
                throw new Error('Item can not be null')
            }
            const {id, title, description, price, discountPercentage, rating, stock,
            brand, category, thumbnail } = action.payload

            const filtered = state.cart?.filter(item => item.id != action.payload?.id) ?? [];
            const itemExist = state.cart?.find((item) => item.id === action.payload?.id);

            const qty: number = itemExist ? itemExist.qty + 1 : 1;

            return { ...state, cart: [ ...filtered, { id, title, description, price, discountPercentage, rating, stock,
            brand, category, thumbnail, qty }] }
        }
        case CartActionType.REMOVE_ITEM: {
            if(!action.payload) {
                throw new Error('Item can not be null')
            }

            const filtered = state.cart?.filter(item => item.id !== action.payload?.id) ?? []

            return { ...state, cart: [ ...filtered ]}
        }
        case CartActionType.SUBMIT: {
            return { ...state, cart: [] }
        }
        case CartActionType.EDIT_QTY: {
            if(!action.payload) {
                throw new Error('Item to change can not be null')
            }

            const item = state.cart?.find(item => item.id === action.payload?.id)
            if (!item) {
                throw new Error('Item must be exist in order to change the quantity')
            }

            const { qty } = action.payload
            const updated: CartItemType = { ...item,  qty}

            const filtered = state.cart?.filter(item => item.id !== action.payload?.id) ?? []

            return { ...state, cart: [ ...filtered, updated ]}
        }
        default:
            return state;
    }
}

export { CartReducers }