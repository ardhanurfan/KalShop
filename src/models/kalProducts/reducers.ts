import { ProductsAction, ProductsActionType, ProductsModel } from "./types";

const productsReducer =  (
    state: ProductsModel = {},
    action: Readonly<ProductsAction>
) : ProductsModel => {
    switch (action.type) {
        case ProductsActionType.GET_PRODUCTS:
            return { ...state, products: action.payload?.products }
        case ProductsActionType.GET_INDIVIDUAL_PRODUCT:
            return { ...state, products: action.payload?.products }
        case ProductsActionType.CLEAR:
            return {}
        default:
            return state
    }
}

export { productsReducer }