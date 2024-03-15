interface Product {
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
    images?: string[];
}

interface ProductsModel {
    products?: Product[],
}

enum ProductsActionType {
    GET_PRODUCTS = "GET_PRODUCTS",
    GET_INDIVIDUAL_PRODUCT = "GET_INDIVIDUAL_PRODUCT",
    CLEAR = "CLEAR"
}

type ProductsAction = {
    type: ProductsActionType.GET_PRODUCTS
    payload?: ProductsModel
} | {
    type: ProductsActionType.GET_INDIVIDUAL_PRODUCT
    payload?: ProductsModel
} | {
    type: ProductsActionType.CLEAR
}

export { ProductsActionType }
export type { ProductsModel, ProductsAction, Product }